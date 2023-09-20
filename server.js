const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { log } = require("console");

const app = express();

const saltrounds = 10;
const password = "Admin@123";

bcrypt
  .genSalt(saltrounds)
  .then((salt) => {
    console.log("Salt:", salt);
    return bcrypt.hash(password, salt);
  })
  .then((hash) => {
    console.log("Hash: ", hash);
  })
  .catch((err) => console.error(err.message));

const port = 3000;
app.listen(port, () => {
  console.log("Server listeninig at port:", port);
});
