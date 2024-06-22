const path = require("path");

const express = require("express");
const router = express.Router();
//! all queries we need to check authorization of user and add new user
const userExists = require("../database/queries/user-exist");
const addCustomer = require("../database/queries/add-customer");

//! method to add new user if not exists in the db
router.post("/add-customer", async (req, res, next) => {
  const anw = await userExists(req.body.email);
  console.log(anw);
  if (anw.length !== 0) {
    res.send(
      '<script>alert("username exists!."); window.location.href = "/login.html";</script>'
    );
  } else {
    await addCustomer(req.body);
    req.session.username = req.body.email;
    req.session.phoneNumber = req.body.Phone;
    res.redirect(`/orders.html`);
  }
});

module.exports = router;
