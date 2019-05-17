import '@babel/polyfill'
import React, { useReducer, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Albums from './components/Albums'
import Footer from './components/Footer'
import { reducer, initialState } from './store'
import {
  changeDiscogsUser,
  changeLastfmUser,
  changeAlbums,
  changeError,
  setLoading,
} from './store/actionCreators'
import getAlbums from './lib/getAlbums'

const App = () => {
  // Initialize state
  const [state, dispatch] = useReducer(reducer, initialState)

  // Get albums list
  const getData = async () => {
    dispatch(setLoading())

    try {
      const { owned, skipped, albums } = await getAlbums(
        state.discogsUser,
        state.lastfmUser
      )
      dispatch(changeAlbums(owned, skipped, albums))
    } catch (error) {
      dispatch(changeError(error.message))
    }
  }

  // Handle form fields
  const handleDiscogsChange = event => {
    dispatch(changeDiscogsUser(event.target.value))
  }

  const handleLastfmChange = event => {
    dispatch(changeLastfmUser(event.target.value))
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    getData()
  }

  // Get default albums list on mount
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="container flex-1 pa3 pa4-ns">
        <main className="w-100 mw9 center">
          <Header
            discogsUser={state.discogsUser}
            handleDiscogsChange={handleDiscogsChange}
            lastfmUser={state.lastfmUser}
            handleLastfmChange={handleLastfmChange}
            handleFormSubmit={handleFormSubmit}
          />

          <Albums
            albums={state.albums}
            loading={state.loading}
            error={state.error}
          />
        </main>
      </div>

      <Footer
        owned={state.owned}
        skipped={state.skipped}
        lastfmUser={state.lastfmUser}
        discogsUser={state.discogsUser}
      />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
