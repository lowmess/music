import {
  CHANGE_DISCOGS_USER,
  CHANGE_LASTFM_USER,
  CHANGE_ALBUMS,
  CHANGE_ERROR,
  SET_LOADING,
} from './actions'

const initialState = {
  loading: true,
  error: false,
  discogsUser: process.env.DISCOGS_USER,
  lastfmUser: process.env.LASTFM_USER,
  owned: null,
  searched: null,
  albums: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_DISCOGS_USER:
      return Object.assign({}, state, { discogsUser: action.payload })

    case CHANGE_LASTFM_USER:
      return Object.assign({}, state, { lastfmUser: action.payload })

    case CHANGE_ALBUMS:
      return Object.assign({}, state, {
        loading: false,
        error: false,
        owned: action.payload.owned,
        searched: action.payload.searched,
        albums: action.payload.albums,
      })

    case CHANGE_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload,
        owned: null,
        searched: null,
        albums: [],
      })

    case SET_LOADING:
      return Object.assign({}, state, {
        loading: true,
        error: false,
        owned: null,
        searched: null,
        albums: [],
      })

    default:
      throw new Error('No matching action type')
  }
}

export { initialState, reducer }
