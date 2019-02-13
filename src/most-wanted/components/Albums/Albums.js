import React from 'react'
import Album from './Album'
import Loading from './Loading'
import ErrorComponent from './Error'

const generateKey = string => string.toLowerCase().replace(' ', '-')

const Albums = ({ albums, loading, error }) => (
  <div className="albums">
    {loading && <Loading />}

    {error && <ErrorComponent error={error} />}

    {albums.map(album => {
      return <Album album={album} key={generateKey(album.name)} />
    })}
  </div>
)

export default Albums
