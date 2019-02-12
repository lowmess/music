import '@babel/polyfill'
import React, { useReducer, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Albums from './components/Albums'
import Footer from './components/Footer'
import { reducer, initialState } from './store'
import { changeAlbums, changeError, setLoading } from './store/action-creators'
import getAlbums from './lib/get-albums'

const App = () => {
  // Initialize state
  const [state, dispatch] = useReducer(reducer, initialState)

  // Get albums list
  async function getData() {
    dispatch(setLoading())

    await getAlbums(state.discogsUser, state.lastfmUser)
      .then(data => {
        dispatch(changeAlbums(data.owned, data.searched, data.albums))
      })
      .catch(error => {
        dispatch(changeError(error))
      })
  }

  // Handle form fields
  // const handleDiscogsChange = event => {
  //   dispatch(changeDiscogsUser(event.target.value))
  // }

  // const handleLastfmChange = event => {
  //   dispatch(changeLastfmUser(event.target.value))
  // }

  // const handleFormSubmit = event => {
  //   event.preventDefault()
  //   getData()
  // }

  // Get default albums list on mount
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="container flex-1 pa4">
        <main className="w-100 mw9 center">
          <Header />
          <Albums albums={state.albums} />
        </main>
      </div>

      <Footer
        owned={state.owned}
        searched={state.searched}
        lastfmUser={state.lastfmUser}
        discogsUser={state.discogsUser}
      />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
