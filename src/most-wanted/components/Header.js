import React from 'react'

const Header = () => (
  <header className="h-100 pa4 bg-white shadow-5">
    <h1 className="mv0 f2 fw7 lh-title f1-ns f1-l">Most Wanted Records</h1>

    <hr className="w-100 mw5 ml0 mt2 mb4 ba bw2 b--hot-pink" />

    <p className="measure mv0">
      Everyone who collects vinyl has a list. This list may be written down,
      catalogued in an app, or just a nebulous idea floating about in their
      head. I am, of course, referring to the namesake of this experiment: the
      &ldquo;most wanted&rdquo; list.
    </p>

    <p className="measure mt3 mb0">
      While some factors besides enjoyment or replayability of a record play
      into desire for physical media (rarity probably being the most prominent),
      I wanted to see if I could quantify exactly which records should be on my
      list based on those factors. The simplest way I could think of doing that
      was to get a list of my most-played albums on Last.fm, tossing out any
      albums I already had logged into my Discogs collection. So that&rsquo;s
      exactly what I did.
    </p>
  </header>
)

export default Header
