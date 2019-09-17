const express = require("express");
// const bcrypt = require("bcryptjs");

const usersRouter = require("./users/usersRouter");
const registerRouter = require("./register/registerRouter");
const loginRouter = require("./login/loginRouter");
// day 2 - adding session (npm install express-session)
const session = require("express-session");
// (npm i connect-session-knex) => have to require the Store after the session - remember to pass session using currying
// const KnexSessionStore = require("connect-session-knex")(session); => doing this in sessionConfig.js instead

const sessionConfig = require("./sessionConfig");

const server = express();

server.use(express.json());
server.use(session(sessionConfig));

server.use("/api/users", usersRouter);
server.use("/api/register", registerRouter);
server.use("/api/login", loginRouter);

// GET to /api/logout
server.get("/api/logout", (request, response) => {
  if (request.session) {
    request.session.destroy(error => {
      if (error) {
        response.status(500).json({
          message: "you can check out anytime you like but you can never leave"
        });
      }
      response.status(200).json({ message: "bye" });
    });
  } else {
    response.status(200).json({ message: "already logged out" });
  }
});

module.exports = server;
