const session = require("express-session");
// (npm i connect-session-knex) => have to require the Store after the session - remember to pass session using currying
const KnexSessionStore = require("connect-session-knex")(session);

const sessionConfig = {
  // cookie name being sent to the browser, it would name the cookie sid by default if no name
  name: "chocolateChip",
  // want to encrypt with secret
  secret: process.env.SESSION_SECRET || "keep it secret, keep it safe",
  cookie: {
    // maxAge - how long is this cookie going to be good for (in milliseconds)
    maxAge: 1000 * 60 * 60,
    // if http connection is not secure, dont send (true means only send cookie over https - want it to be true in production)
    secure: false,
    // true means JS has no access to the cookie (only the browser has access)
    httpOnly: true
  },
  resave: false,
  saveUninitialized: true, // GDPR compliance

  // store is configuring what the session library is doing (tells it to save the session to the database)
  // dont have to log in again after restarting server now! - session information now persistent to database
  store: new KnexSessionStore({
    // specific config for this library - db is the import from dbConfig
    knex: db,
    // creates table if no table to store session - would provide table name and sid field name by default
    tablename: "knex sessions",
    sidfieldname: "sessionid",
    createtable: true,
    // clean out expired session data
    clearInterval: 1000 * 60 * 30
  })
};

module.exports = sessionConfig;
