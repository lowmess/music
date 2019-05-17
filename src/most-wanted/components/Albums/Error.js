import React from 'react'
import PropTypes from 'prop-types'

const ErrorComponent = ({ error }) => (
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
          className="ma-auto w4 h4 white"
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            overflow: 'visible',
          }}
        >
          <path d="M1.0606601717798212 1.0606601717798212 L14.939339828220179 14.939339828220179" />
          <path d="M14.939339828220179 1.0606601717798212 L1.0606601717798212 14.939339828220179" />
        </svg>
      </div>
    </div>

    <div className="flex-1 flex flex-column pa3 lh-title">
      <p className="mv0 f4 fw7 f3-l">Error</p>

      <p className="mt1 mb0 f5 f4-l">{error}</p>
    </div>
  </div>
)

ErrorComponent.propTypes = {
  error: PropTypes.string,
}

export default ErrorComponent
