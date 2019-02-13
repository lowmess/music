import React from 'react'

const Loading = () => (
  <div className="flex flex-column bg-white shadow-5">
    <div className="loading-image aspect-ratio aspect-ratio--1x1 bb b--light-gray bg-hot-pink">
      <div className="aspect-ratio--object flex">
        <div className="spinner w4 h4 ma-auto ba bw4 br-100 b--white" />
      </div>
    </div>

    <div className="flex-1 flex flex-column pa3 lh-title">
      <div className="loading-text h2 w-two-thirds mw-100 bg-hot-pink" />
      <div className="loading-text h1 w-third mw-100 mt2 mb4 bg-hot-pink" />
      <div className="h1 w-50 mw-100 mt-auto bg-hot-pink" />
    </div>
  </div>
)

export default Loading
