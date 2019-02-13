import React from 'react'
import Album from './Album'
import Loading from './Loading'

const generateKey = string => string.toLowerCase().replace(' ', '-')

const Albums = ({ albums, loading }) => (
  <div className="albums">
    {loading && <Loading />}
    {albums.map(album => {
      return <Album album={album} key={generateKey(album.name)} />
    })}
  </div>
)

export default Albums
