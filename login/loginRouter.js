const express = require("express");

const Users = require("../helpers/usersModel");
// const bcrypt = require("bcryptjs");
const db = require("../data/db-config");

const router = express.Router();

router.get("/", (request, response) => {
  Users.getProjects()
    .then(projects => {
      response.json(projects);
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get projects" });
    });
});

module.exports = router;
