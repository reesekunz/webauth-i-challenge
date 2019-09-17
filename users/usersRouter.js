const express = require("express");

const Users = require("../helpers/usersModel");
const bcrypt = require("bcryptjs");
const db = require("../data/db-config");
// const restrictedMiddlewareValdiation = require("../auth/middleware");

const router = express.Router();
// GET to /api/users
router.get("/", (request, response) => {
  Users.find()
    .then(users => {
      response.json(users);
    })
    .catch(error => response.send(error));
});

module.exports = router;
