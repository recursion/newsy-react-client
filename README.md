## Newsy

A simple web client for searching the newsapi.org api built using react/redux. Newsy makes using the variety of newsapi.org search options easy and accessible.

Newsy currently proxy's requests through a private express.js server so no additional api key is needed. Advanced features may be added to the server in the future, but for now, it simply attaches an api key and passes query's through to newsapi.org, returning the results to the client. 

Easily convertible to something that stores and uses your own api key from the client, and calls direct to the newsapi.org api - this may be added as a base option in the future.

Project starter cloned from this react-redux boilerplate: https://github.com/flexdinesh/react-redux-boilerplate.git

## Features
Allows users to easily search a plethora of news sites using a simple keyword search or a variety of advanced options.

- Mobile First, Responsive design.
- Advanced and/or Simple search options.
Demo: https://newsy.recursionslaboratory.com

### Implemented API:
- [x] Search 'Top Headlines'
  - [x] Query Strings (or empty query's)
  - [x] Sources or Country and Category.
  - [ ] pageSize -- currently we only ever use the default of 20

- Search 'Everything'
  - [x] Query Strings (no empty queries)
  - [x] Sources or Country and Category.
  - [x] Language
  - [x] SortBy
  - [x] From Date
  - [x] To Date
  - [ ] Domains
  - [ ] exclude domains
  - [ ] pageSize -- currently we only ever use the default of 20

## TODO

- Lots of testing that could/should be done here. Since it was a prototype, only a few tests were written during development. The queryBuilder in particular would be a good target for testing, as well as all components dependant on certain variables for thier display.
- A possible design choice that could be made is to have a 'top-headlines' and a 'everything' page. So that for searching those targets, there is a link to click on instead of a radio button. This would allow for displaying only the options available to those targets, instead of having to use logic to decide which options to show.
- There are a few remaining api features that could be added.
- Styling/UI/UX improvements. Currently this is super simple and has lots of room for improvements such as a [sliding panel](https://www.npmjs.com/package/react-sliding-pane) for advanced options.
- When the image fails to load or can't be found, attempt to load a logo image for the source instead of just a white filler.
- Client side santizing of all search results. - Currently we are treating the results as being from a trusted third party, but best practice would have us sanitize all results before using them.

## Quick start for client development

1. Clone this repo using `git clone https://github.com/recursion/newsy-react-client`
2. Move to the appropriate directory: `cd newsy-react-client`.<br />
3. Run `yarn` or `npm install` to install dependencies.<br />
4. Run `npm start` to see the example app at `http://localhost:3333`. Without a server to connect to, this will not return requests...
5. Install the newsy api server locally (instructions below) or set your dev url (in config.js) to the actual newsy api server (not the newsapi.org server - as this will not work without also attaching an api key to your request. Newsy url to be provided when it's up, which it currently is not.)

## Quick start - with newsy api server

1. Clone the server repo using `git clone https://github.com/recursion/newsy-server`
2. Clone this repo using `git clone https://github.com/recursion/newsy-react-client`
3. Drop the client package into `server/src/client`
4. Build the client `npm run build` from the client directory.
5. From the server root directory - `npm run dev`

## License

MIT license, Copyright (c) 2018 Michael Symmes.
