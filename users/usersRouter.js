const express = require("express");

const Users = require("../helpers/usersModel");
const bcrypt = require("bcryptjs");
const db = require("../data/db-config");
const restrictedMiddlewareValdiation = require("../auth/middleware");

const router = express.Router();
// Get to /api/users
// If the user is logged in, respond with an array of all the users contained in the database. If the user is not logged in repond with the correct status code and the message: 'You shall not pass!'.
// Doing this ^ with middleware validation
server.get("/", restrictedMiddlewareValdiation, (request, response) => {
  Users.find()
    .then(users => {
      response.json(users);
    })
    .catch(error => response.send(error));
});

module.exports = router;
