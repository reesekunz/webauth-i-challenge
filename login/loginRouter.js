const express = require("express");
const session = require("express-session");

const Users = require("../helpers/usersModel");
const bcrypt = require("bcryptjs");
const db = require("../data/db-config");

const router = express.Router();

// POST to /api/login
router.post("/", (request, response) => {
  let { username, password } = request.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        request.session.user = user;
        response.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        // Dont send 404 message because we dont want them to be guessing usernames
        response.status(401).json({ message: "You shall not pass!" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
