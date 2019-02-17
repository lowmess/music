import React from 'react'
import PropTypes from 'prop-types'

const Album = ({ album }) => (
  <div className="flex flex-column bg-white shadow-5">
    <div className="card-image aspect-ratio aspect-ratio--1x1 bb b--light-gray">
      <div className="aspect-ratio--object">
        <img
          className="album-image db w-100 h-100 o-cover"
          src={album.image}
          alt={`\u201C${album.name}\u201D album cover`}
        />
      </div>
    </div>

    <div className="flex-1 flex flex-column pa3 lh-title">
      <p className="mv0 f4 fw7 f3-l">{album.name}</p>

      <p className="mt1 mb4 f5 f4-l">{album.artist}</p>

      <p className="mt-auto mb0 f7 fw7 hot-pink tracked-mega ttu">
        #{album.rank} &middot; {album.plays} plays
      </p>
    </div>
  </div>
)

export const albumPropType = PropTypes.exact({
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  plays: PropTypes.number.isRequired,
})

Album.propTypes = {
  album: albumPropType.isRequired,
}

export default Album
