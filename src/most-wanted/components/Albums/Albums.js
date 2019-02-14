import React from 'react'
import Album from './Album'
import Loading from './Loading'
import ErrorComponent from './Error'

const toSnakeCase = (...strings) =>
  strings
    .join(' ')
    .toLowerCase()
    .replace(/[^\w\d\s]/g, ' ')
    .trim()
    .replace(/\s+/g, '-')

const Albums = ({ albums, loading, error }) => (
  <div className="albums">
    {loading && <Loading />}

    {error && <ErrorComponent error={error} />}

    {albums.map(album => {
      return <Album album={album} key={toSnakeCase(album.artist, album.name)} />
    })}
  </div>
)

export default Albums
