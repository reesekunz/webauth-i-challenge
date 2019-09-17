// const bcrypt = require("bcryptjs");

// const Users = require("../helpers/usersModel");

module.exports = (request, response, next) => {
  // is the user logged in === do we have information about the user in our session
  if (request.session && request.session.user) {
    next();
  } else {
    response.status(401).json({ message: "You shall not pass!" });
  }
};
// middleware doesnt need to verify credentials anymore, just needs to check to see if the user has a session
