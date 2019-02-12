import React from 'react'
import Album from './Album'

const generateKey = string => string.toLowerCase().replace(' ', '-')

const Albums = ({ albums }) => (
  <div className="albums">
    {albums.map(album => {
      return <Album album={album} key={generateKey(album.name)} />
    })}
  </div>
)

export default Albums
