const bcrypt = require("bcryptjs");

const Users = require("../helpers/usersModel");
// If the user is logged in, respond with an array of all the users contained in the database.
// If the user is not logged in repond with the correct status code and the message: 'You shall not pass!'.

module.exports = (request, response, next) => {
  let { username, password } = request.headers;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        next();
      } else {
        res.status(401).json({ message: "You shall not pass!" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
};
// This is how you would set up the headers with axios

// function fetch() {
//   const reqOptions = {
//     headers: {
//       username: "",
//       password: ""
//     }
//   };

// axios.get(url, reqOptions).then().catch()
// axios.post(url, data, reqOptions).then().catch()
