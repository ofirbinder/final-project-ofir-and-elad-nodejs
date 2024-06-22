const express = require("express");
const getServicePromt = require("../database/queries/get-service-promt");

//! all queries we shell need to do actions for order queues or remove them.

const router = express.Router();

//! method to get all the queues of the user
router.post("/service-title", async (req, res, next) => {
  const username = req.session.username;
  const serviceTitle = req.body.serviceTitle;
  const result = await getServicePromt(username, serviceTitle);
  res.json(result);
});

module.exports = router;
