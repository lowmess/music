import React from 'react'
import PropTypes from 'prop-types'
import Album, { albumPropType } from './Album'
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
  <>
    {loading && <Loading />}

    {error && <ErrorComponent error={error} />}

    {albums.map(album => {
      return <Album album={album} key={toSnakeCase(album.artist, album.name)} />
    })}
  </>
)

Albums.propTypes = {
  albums: PropTypes.arrayOf(albumPropType).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
}

export default Albums
