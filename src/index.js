const express = require("express");
const User = require("../models").user;
const app = express();

app.get("/", async (req, res) => {
  const users = await User.findAll();

  res.send(users);
});

const PORT = 4000;

app.listen(PORT, (req, res) => {
  console.log(`App is listening on port ${PORT}.`);
});
