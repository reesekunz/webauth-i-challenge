const express = require("express");

const Users = require("../helpers/usersModel");
const bcrypt = require("bcryptjs");
const db = require("../data/db-config");

const router = express.Router();

// POST to /api/register
// 	Creates a user using the information sent inside the body of the request.
// Hash the password before saving the user to the database.

router.post("/", (request, response) => {
  let { username, password } = request.body;

  const hash = bcrypt.hashSync(password, 14); // it's 2 ^ 14, not 14. 2^14 is the number of rounds - higher the number, the more secure the hash will be (harder for someone to pregenerate a hash) - try to have the # at 14 or higher

  Users.add({ username, password: hash })
    .then(saved => {
      response.status(201).json(saved);
    })
    .catch(error => {
      response.status(500).json(error);
    });
});

module.exports = router;
