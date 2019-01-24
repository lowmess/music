Just playing around with some data.

# Development

Uses [Parcel](https://parceljs.org) under-the-hood to bundle everything up.

```sh
$ npm install

# Start a dev server
$ npm start

# Production bundle
$ npm run build
```

# App Secrets

There are some keys used to actually fetch the data (and keep this relatively user-agnostic). Luckily, Parcel has `dotenv` support out-of-the-box. In production environments, these keys will need to be accessible to the build as well. They are as follows:

- `DISCOGS_USER` - Discogs username to look up
- `LASTFM_KEY` - Last.fm oauth token
- `LASTFM_USER` - Last.fm username to look up
