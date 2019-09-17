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

module.exports = server;
