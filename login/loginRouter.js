const express = require("express");

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
        response.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        response.status(401).json({ message: "You shall not pass!" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
