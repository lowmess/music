import '@babel/polyfill'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Albums from './components/Albums'
import Footer from './components/Footer'
import getAlbums from './lib/get-albums'

const App = () => {
  // Initialize state
  const [discogsUser, setDiscogsUser] = useState(process.env.DISCOGS_USER) // eslint-disable-line no-unused-vars
  const [lastfmUser, setLastfmUser] = useState(process.env.LASTFM_USER) // eslint-disable-line no-unused-vars
  const [owned, setOwned] = useState('\u2014')
  const [searched, setSearched] = useState('\u2014')
  const [albums, setAlbums] = useState([])

  // Get albums list
  async function getData() {
    const data = await getAlbums(discogsUser, lastfmUser)

    setOwned(data.owned)
    setSearched(data.searched)
    setAlbums(data.albums)
  }

  // Handle form fields
  // const handleDiscogsChange = event => {
  //   setDiscogsUser(event.target.value)
  // }

  // const handleLastfmChange = event => {
  //   setLastfmUser(event.target.value)
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
      <div className="container pa4" style={{ flex: 1 }}>
        <main className="w-100 mw9 center">
          <Header />
          <Albums albums={albums} />
        </main>
      </div>

      <Footer
        owned={owned}
        searched={searched}
        lastfmUser={lastfmUser}
        discogsUser={discogsUser}
      />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
