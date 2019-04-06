import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ owned, skipped, lastfmUser, discogsUser }) => (
  <footer className="flex flex-column justify-center pa4 bg-white shadow-5 flex-row-ns items-stretch-l pv5-l">
    <div className="flex-column justify-center mb3 b--hot-pink flex-ns mb0-ns br-ns pr5-ns flex-row-l pr5-l">
      <div className="flex flex-column justify-center lh-title mb3 b--hot-pink mb0-l br-l pr5-l">
        <p className="mv0 f5 f4-l">Albums Owned:</p>
        <span className="f2 fw7 f1-l">{owned || '\u2014'}</span>
      </div>

      <div className="flex flex-column justify-center lh-title pl5-l">
        <p className="mv0 f5 f4-l">Albums Skipped:</p>
        <span className="f2 fw7 f1-l">{skipped || '\u2014'}</span>
      </div>
    </div>

    <div className="flex items-center b--hot-pink pl5-ns br-l pr5-l">
      <ul className="list mv0 pl0">
        <li>
          <a
            href={`https://last.fm/user/${lastfmUser}`}
            className="link hot-pink hover-navy"
          >
            Last.fm Profile
          </a>
        </li>

        <li className="mb3">
          <a
            href={`https://discogs.com/user/${discogsUser}/collection`}
            className="link hot-pink hover-navy"
          >
            Discogs Collection
          </a>
        </li>

        <li>
          <a href="https://lowmess.com" className="link hot-pink hover-navy">
            Made by Alec Lomas
          </a>
        </li>

        <li>
          <a
            href="https://github.com/lowmess/music/tree/master/src/most-wanted"
            className="link hot-pink hover-navy"
          >
            View on GitHub
          </a>
        </li>

        {/* <li>
          <a href="/" className="link hot-pink hover-navy">
            Other Experiments
          </a>
        </li> */}
      </ul>
    </div>

    <div className="dn items-center pl5 flex-l">
      <svg
        className="w3 h-100"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 281 241"
        width="32"
        height="32"
        preserveAspectRatio="xMinYMid"
      >
        <title>lowmess Icon</title>
        <path d="M280 120v120c-46.795 0-93.59.148-140.385-.001-24.624-.235-48.379-16.914-56.455-40.76-2.093-6.18-3.139-12.726-3.16-19.207V40H40v200H0V0h120c0 60.088-.568 120.178.002 180.263.164 10.317 9.135 19.703 20.03 19.737H240v-40h-80V0h40v120h80z" />
      </svg>
    </div>
  </footer>
)

Footer.propTypes = {
  owned: PropTypes.number,
  skipped: PropTypes.number,
  discogsUser: PropTypes.string.isRequired,
  lastfmUser: PropTypes.string.isRequired,
}

export default Footer
