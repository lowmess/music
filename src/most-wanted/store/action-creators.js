import {
  CHANGE_LASTFM_USER,
  CHANGE_DISCOGS_USER,
  CHANGE_ALBUMS,
  CHANGE_ERROR,
  SET_LOADING,
} from './actions'

const changeLastfmUser = user => ({
  type: CHANGE_LASTFM_USER,
  payload: user,
})

const changeDiscogsUser = user => ({
  type: CHANGE_DISCOGS_USER,
  payload: user,
})

const changeAlbums = (owned, searched, albums) => ({
  type: CHANGE_ALBUMS,
  payload: { owned, searched, albums },
})

const changeError = error => ({
  type: CHANGE_ERROR,
  payload: error,
})

const setLoading = () => ({
  type: SET_LOADING,
})

export {
  changeLastfmUser,
  changeDiscogsUser,
  changeAlbums,
  changeError,
  setLoading,
}
