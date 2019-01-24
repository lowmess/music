/* eslint-disable no-param-reassign */

import '@babel/polyfill'
import fetch from 'unfetch'

// Get complete list of owned records from Discogs. The function will call
// itself recursively until the full collection is scraped according to the
// pagination object in the response from Discogs.
const getOwned = (page = 1, records = []) =>
  fetch(
    `https://api.discogs.com/users/${
      process.env.DISCOGS_USER
    }/collection/folders/0/releases?per_page=100&page=${page}`
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
        return getOwned(page + 1, records)
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
const getUnowned = (owned, page = 1, albums = [], count = 0) =>
  fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${
      process.env.LASTFM_USER
    }&api_key=${process.env.LASTFM_KEY}&limit=100&page=${page}&format=json`
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
          return getUnowned(owned, page + 1, albums)
        } else {
          return { count, albums }
        }
      }
    })
    .catch(console.error)

// Create markup for album list
const markup = album => {
  const html = `
    <div class="flex flex-column bg-white shadow-4">
      <div class="aspect-ratio aspect-ratio--1x1 bb b--light-gray">
        <div class="aspect-ratio-object">
          <img class="db w-100" src="${album.image}" alt="&ldquo;${
    album.name
  }&rdquo; album cover" />
        </div>
      </div>

      <div class="flex flex-column pa3 lh-title" style="flex: 1;">
        <p class="mv0 f4 fw7 f3-l">
          ${album.name}
        </p>

        <p class="mt1 mb4 f5 f4-l">
          ${album.artist}
        </p>

        <p class="mb0 f7 fw7 light-silver tracked-mega ttu" style="margin-top: auto;">
          ${album.plays} plays
        </p>
      </div>
    </div>`
  const template = document.createElement('template')
  template.innerHTML = html
  return template.content.firstElementChild
}

// eslint-disable-next-line
;(async () => {
  const owned = await getOwned()
  const unowned = await getUnowned(owned)

  // stats
  document.querySelector('.owned-count').innerHTML = owned.length
  document.querySelector('.searched-count').innerHTML = unowned.count

  // footer links
  const lastfm = document.querySelector('.lastfm-link')
  lastfm.href = `https://last.fm/user/${process.env.LASTFM_USER}`
  lastfm.target = '_blank'

  const discogs = document.querySelector('.discogs-link')
  discogs.href = `https://discogs.com/user/${
    process.env.DISCOGS_USER
  }/collection`
  discogs.target = '_blank'

  // albums
  const albums = document.querySelector('.albums')
  unowned.albums.forEach(album => {
    albums.appendChild(markup(album))
  })
})()
