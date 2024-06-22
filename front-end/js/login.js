"use strict";

let x = document.getElementById("login");
let y = document.getElementById("register");
let z = document.getElementById("btn");

//! method to move back the component of login
function login() {
  x.style.left = "2.7rem";
  y.style.right = "-35rem";
  z.style.left = "0";
}

//! method to move back the component of register
function register() {
  x.style.left = "-35rem";
  y.style.right = "2.5rem";
  z.style.left = "15rem";
}

//! method to show or hide password at login
function myLogPassword() {
  let a = document.getElementById("logPassword");
  let b = document.getElementById("eye");
  let c = document.getElementById("eye-slash");

  if (a.type === "password") {
    a.type = "text";
    b.style.opacity = "0";
    c.style.opacity = "1";
  } else {
    a.type = "password";
    b.style.opacity = "1";
    c.style.opacity = "0";
  }
}

//! method to show or hide password at register
function myRegPassword() {
  let a = document.getElementById("regPassword");
  let b = document.getElementById("eye-2");
  let c = document.getElementById("eye-slash-2");

  if (a.type === "password") {
    a.type = "text";
    b.style.opacity = "0";
    c.style.opacity = "1";
  } else {
    a.type = "password";
    b.style.opacity = "1";
    c.style.opacity = "0";
  }
}
