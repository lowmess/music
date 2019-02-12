import React from 'react'

const Album = ({ album }) => (
  <div className="flex flex-column bg-white shadow-5">
    <div className="aspect-ratio aspect-ratio--1x1 bb b--light-gray">
      <div className="aspect-ratio-object">
        <img
          className="db w-100"
          src={album.image}
          alt={`\u201C${album.name}\u201D album cover`}
        />
      </div>
    </div>

    <div className="flex flex-column pa3 lh-title" style={{ flex: 1 }}>
      <p className="mv0 f4 fw7 f3-l">{album.name}</p>

      <p className="mt1 mb4 f5 f4-l">{album.artist}</p>

      <p
        className="mb0 f7 fw7 hot-pink tracked-mega ttu"
        style={{ marginTop: 'auto' }}
      >
        {album.plays} plays
      </p>
    </div>
  </div>
)

export default Album