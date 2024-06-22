const path = require("path");
const express = require("express");

//! queries we need to use for methods from frontend on the backend server (mySQL)
const getUsernames = require("../database/queries/get-user");
const userExists = require("../database/queries/user-exist");
const getPhone = require("../database/queries/get-phone");

const router = express.Router();

//! after send username (email) and password we checking if the user exist and then we login and read his queues from the server, if not exists we send him alert as assign the username isn't exists or the password isn't correct, then we use redirect to /login.html again so he can try again or register
router.post("/check-login", async (req, res, next) => {
  const username = req.body.email;
  const password = req.body.password;
  console.log(req.body);
  const anw = await userExists(req.body.email);

  if (anw.length !== 0) {
    const userExist = await getUsernames(username, password);
    if (userExist.length !== 0) {
      //! save username and phone number in session so we can user to do actions when we want to specify the actions to the user
      req.session.username = username;
      const phoneNumber = await getPhone(username, password);
      req.session.phoneNumber = phoneNumber[0].Phone;

      res.redirect(`/orders.html`);
    } else {
      res.send(
        '<script>alert("Incorrect password."); window.location.href = "/login.html";</script>'
      );
    }
  } else {
    res.send(
      `<script>alert("username doesn't exists."); window.location.href = "/login.html";</script>`
    );
  }
});

module.exports = router;
