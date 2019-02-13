import React from 'react'

const Header = ({
  discogsUser,
  handleDiscogsChange,
  lastfmUser,
  handleLastfmChange,
  handleFormSubmit,
}) => {
  return (
    <header className="h-100 bg-white shadow-5">
      <div className="pa4 bb b--light-gray">
        <h1 className="mv0 f2 fw7 lh-title f1-ns f1-l">Most Wanted Records</h1>

        <hr className="w-100 mw5 ml0 mt2 mb4 ba bw2 b--hot-pink" />

        <p className="measure mv0">
          Everyone who collects vinyl has a list. This list may be written down,
          catalogued in an app, or just a nebulous idea floating about in their
          head. I am, of course, referring to the namesake of this experiment:
          the &ldquo;most wanted&rdquo;&nbsp;list.
        </p>

        <p className="measure mt3 mb0">
          While some factors besides enjoyment or replayability of a record play
          into desire for physical media (like rarity and medium-fit), I wanted
          to see if I could quantify exactly which records should be on my list
          based on those factors. The simplest way I could think of doing that
          was to get a list of my 25 most-played albums on Last.fm that I
          didn&rsquo;t already have logged into my Discogs collection. Input
          your usernames below to try it with your own&nbsp;collection.
        </p>
      </div>

      <div className="pa4">
        <form onSubmit={handleFormSubmit}>
          <div className="flex-l">
            <div className="flex-1 mb3 pv2 ph3 bg-light-gray mb0-l mr3-l">
              <label
                htmlFor="discogs"
                className="db mb1 f7 fw7 hot-pink tracked ttu"
              >
                Discogs Username
              </label>

              <input
                name="discogs"
                id="discogs"
                value={discogsUser}
                onChange={handleDiscogsChange}
                className="w-100 bn pa0 bg-transparent navy f4 fw5"
              />
            </div>

            <div className="flex-1 mb3 pv2 ph3 bg-light-gray mb0-l mr3-l">
              <label
                htmlFor="lastfm"
                className="db mb1 f7 fw7 hot-pink tracked ttu"
              >
                Last.fm Username
              </label>

              <input
                name="lastfm"
                id="lastfm"
                value={lastfmUser}
                onChange={handleLastfmChange}
                className="w-100 bn pa0 bg-transparent navy f4 fw5"
              />
            </div>

            <button
              type="submit"
              className="w-100 bn pa3 bg-hot-pink white pointer bg-animate hover-bg-dark-pink w-auto-l"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="none"
                stroke="currentcolor"
                strokeWidth="3"
                className="w2 h2"
                style={{
                  fill: 'none',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  overflow: 'visible',
                }}
              >
                <path d="M0 8 L14.5 8" />
                <path d="M7.560660171779821 1.0606601717798212 L14.5 8 L7.560660171779821 14.939339828220179" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </header>
  )
}

export default Header
