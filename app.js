/*
 ? Final Project NODEJS created by Ofir Binder and Elad Atias
 */

//! import all libraries from core + express + my own API's for routes

const path = require("path");
const express = require("express");
const session = require("express-session");
const orderRoutes = require("./routes/order");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const servicesTitlesRoutes = require("./routes/servicesTitles");

//! execute express so we can connect to free port or port 3000
const app = express();
const port = process.env.PORT || 3000;

//! using session so i can store after login the params (username,phone,email etc..)
app.use(
  session({
    secret: "your-secret-key",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 365 * 24 * 60 * 60 * 1000 },
  })
);

//! set express.json() so it can parse the json object so i can use it at the server level
app.use(express.json());

//! sending all frontend to the browser
app.use(express.static(path.join(__dirname, "front-end")));
app.use(express.urlencoded({ extended: false }));

//! all routs our website can be navigate to
app.use("/login", loginRoutes);
app.use("/orders", orderRoutes);
app.use("/register", registerRoutes);
app.use("/service", servicesTitlesRoutes);

//! in case of unknown page we send status 404 and the file 404.html
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "front-end", "404.html"));
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
