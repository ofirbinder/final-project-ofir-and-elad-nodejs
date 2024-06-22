const express = require("express");

//! all queries we shell need to do actions for order queues or remove them.
const getQueues = require("../database/queries/get-queue");
const deleteQueueByID = require("../database/queries/del-queueID");
const getServices = require("../database/queries/get-services");

const getFullName = require("../database/queries/get-name");

const addQueue = require("../database/queries/add-queue");
const router = express.Router();

//! method to get all the queues of the user
router.get("/queues", async (req, res, next) => {
  const username = req.session.username;
  const queues = await getQueues(username);
  const fullName = await getFullName(username);
  console.log(fullName + " the name ");
  res.json([queues, fullName]);
});

//! method to get all services into the select input in the form of book a queue
router.get("/services", async (req, res, next) => {
  const services = await getServices();
  console.log(services);
  res.json(services);
});

//! method to add new queue
router.post("/add-queue", async (req, res, next) => {
  const username = req.session.username;
  const phoneNumber = req.session.phoneNumber;
  console.log("I am adding queue");
  console.log(req.body.service);
  await addQueue(req.body, username, phoneNumber);
  res.redirect(`/orders.html`);
});

//! method to delete queue
router.post("/delete", async (req, res, next) => {
  const orderID = req.body.orderID;
  await deleteQueueByID(orderID);
  res.redirect(`/orders.html`);
});

module.exports = router;
