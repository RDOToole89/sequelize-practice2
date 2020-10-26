const express = require("express");
const User = require("../models").user;
const app = express();

app.get("/", async (req, res) => {
  const users = await User.findAll();

  res.send(users);
});

// http://localhost:4000/users/search?firstName=Rein
app.get("/users", async (req, res) => {
  console.log("REQ.QUERY:", req.query);

  const users = await User.findAll({ where: req.query });

  if (users) {
    res.send(users);
  } else {
    res.send("Sorry no user found!");
  }
});

app.get("/users/:userId", async (req, res) => {
  const userId = parseInt(req.params.userId);
  console.log("USERID IS:", userId);

  const user = await User.findByPk(userId);

  if (user) {
    res.send(user);
  } else {
    res.send("Sorry no user found!");
  }
});

const PORT = 4000;

app.listen(PORT, (req, res) => {
  console.log(`App is listening on port ${PORT}.`);
});
