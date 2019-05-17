import React from 'react'

const Loading = () => (
  <div className="flex flex-column bg-white shadow-5">
    <div className="card-image aspect-ratio aspect-ratio--1x1 bb b--light-gray bg-hot-pink">
      <div className="aspect-ratio--object flex">
        <svg
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="64"
          height="64"
          fill="none"
          stroke="currentcolor"
          strokeWidth="3"
          className="spinner ma-auto w4 h4 white"
          style={{
            fill: 'none',
            display: 'inline-block',
            verticalAlign: 'middle',
            overflow: 'visible',
          }}
        >
          <title>Loading Icon</title>
          <path d="M7.991 1.5a6.494 6.494 0 0 1 6.491 6.491 6.494 6.494 0 0 1-6.491 6.491A6.494 6.494 0 0 1 1.5 7.991" />
        </svg>
      </div>
    </div>

    <div className="flex-1 flex flex-column pa3 lh-title">
      <div className="card-text h-1 w-two-thirds mw-100 bg-hot-pink f4 f3-l" />
      <div className="card-text h-1 w-40 mw-100 mt2 mb4 bg-hot-pink f5 f4-l" />
      <div className="h-1 w-third mw-100 mt-auto bg-hot-pink f7" />
    </div>
  </div>
)

export default Loading
