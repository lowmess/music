/* eslint-disable no-param-reassign */

// Get complete list of owned records from Discogs. The function will call
// itself recursively until the full collection is scraped according to the
// pagination object in the response from Discogs.
const getOwned = (discogsUser, page = 1, records = []) =>
  fetch(
    `https://api.discogs.com/users/${discogsUser}/collection/folders/0/releases?per_page=100&page=${page}`
  )
    .then(response => {
      if (response.status !== 200) {
        throw new Error(`${response.status}: ${response.statusText}`)
      }

      return response.json()
    })
    .then(data => {
      records = records.concat(
        data.releases.map(release => ({
          artists: release.basic_information.artists.map(artist => ({
            name: artist.name,
            anv: artist.anv,
          })),
          name: release.basic_information.title,
          year: release.basic_information.year,
        }))
      )

      if (page < data.pagination.pages) {
        return getOwned(discogsUser, page + 1, records)
      } else {
        return records
      }
    })
    .catch(console.error)

// This function checks pretty loosely if the album is already owned.
// This is because different services fuck up album and artist names
// all the time, especially on collaboration albums and reissues.
const albumIsOwned = (album, owned) => {
  let search = false

  owned.forEach(record => {
    let sameArtist = false
    let sameAlbum = false

    record.artists.forEach(artist => {
      if (
        album.artist.toLowerCase().includes(artist.name.toLowerCase()) ||
        artist.name.toLowerCase().includes(album.artist.toLowerCase())
      ) {
        sameArtist = true
      } else if (
        artist.anv &&
        (album.artist.toLowerCase().includes(artist.anv.toLowerCase()) ||
          artist.anv.toLowerCase().includes(album.artist.toLowerCase()))
      ) {
        sameArtist = true
      }
    })

    if (
      album.name.toLowerCase().includes(record.name.toLowerCase()) ||
      record.name.toLowerCase().includes(album.name.toLowerCase())
    ) {
      sameAlbum = true
    }

    if (sameArtist && sameAlbum) {
      search = true
      return true
    }
  })

  return search
}

// Get list of 25 most played albums on Last.fm that are _not_ in the Discogs
// collection. Similar to above, the function will recursively call itself
// until at least 25 unowned albums are displayed, or Last.fm runs out of data
// for us to scrape (congrats on the giant album collection in the latter case).
const getUnowned = (lastfmUser, owned, page = 1, albums = [], count = 0) =>
  fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${lastfmUser}&api_key=${
      process.env.LASTFM_KEY
    }&limit=100&page=${page}&format=json`
  )
    .then(response => {
      if (response.status !== 200) {
        throw new Error(`${response.status}: ${response.statusText}`)
      }

      return response.json()
    })
    .then(data => {
      if (data.topalbums) {
        data.topalbums.album.every(album => {
          count++

          const formattedAlbum = {
            artist: album.artist.name,
            name: album.name,
            plays: album.playcount,
            image: album.image.pop()['#text'],
          }

          if (!albumIsOwned(formattedAlbum, owned)) {
            albums = [...albums, formattedAlbum]
          }

          return albums.length < 25
        })

        if (albums.length < 25 && page < data.topalbums['@attr'].totalPages) {
          return getUnowned(lastfmUser, owned, page + 1, albums)
        } else {
          return { count, albums }
        }
      }
    })
    .catch(console.error)

async function getAlbums(
  lastfmUser = process.env.LASTFM_USER,
  discogsUser = process.env.DISCOGS_USER
) {
  const owned = await getOwned(discogsUser)
  const unowned = await getUnowned(lastfmUser, owned)

  return {
    owned: owned.length,
    searched: unowned.count,
    albums: unowned.albums,
  }
}

export default getAlbums
