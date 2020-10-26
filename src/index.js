const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = 4000;

app.listen(PORT, (req, res) => {
  console.log(`App is listening on port ${PORT}.`);
});
