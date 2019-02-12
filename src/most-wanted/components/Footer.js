import React from 'react'

const Footer = ({ owned, searched, lastfmUser, discogsUser }) => (
  <footer className="flex flex-column justify-center pa4 bg-white shadow-5 flex-row-ns items-stretch-l pv5-l">
    <div className="flex-column justify-center mb3 b--hot-pink flex-ns mb0-ns br-ns pr5-ns flex-row-l pr5-l">
      <div className="flex flex-column justify-center lh-title mb3 b--hot-pink mb0-l br-l pr5-l">
        <p className="mv0 f5 f4-l">Albums Owned:</p>
        <span className="owned-count f2 fw7 f1-l">{owned}</span>
      </div>

      <div className="flex flex-column justify-center lh-title pl5-l">
        <p className="mv0 f5 f4-l">Albums Searched:</p>
        <span className="searched-count f2 fw7 f1-l">{searched}</span>
      </div>
    </div>

    <div className="flex items-center b--hot-pink pl5-ns br-l pr5-l">
      <ul className="list mv0 pl0">
        <li>
          <a
            href={`https://last.fm/user/${lastfmUser}`}
            className="lastfm-link link hot-pink hover-navy"
          >
            Last.fm Profile
          </a>
        </li>

        <li className="mb3">
          <a
            href={`https://discogs.com/user/${discogsUser}/collection`}
            className="discogs-link link hot-pink hover-navy"
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

        <li>
          <a href="/" className="link hot-pink hover-navy">
            Other Experiments
          </a>
        </li>
      </ul>
    </div>

    <div className="dn items-center pl5 flex-l">
      <svg
        className="w3 h-100"
        height="32"
        width="32"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 252 253"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>lowmess (Alec Lomas) logo</title>
        <path d="M220.5 126.25v81H126c-22.37 0-40.5-18.13-40.5-40.5v-94.5h-27v135h-27v-162h81V160c0 13.5 6.833 20.25 20.25 20.25h60.75v-27h-54v-108h27v81h54z" />
      </svg>
    </div>
  </footer>
)

export default Footer
