require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Welcome to Backend Revision.");
});

app.get("/me", (req, res) => {
  res.send("Welcome back SRM!!!");
});

app.get("/intro", (req, res) => {
  res.send("<h1>Hey__What's UP!!</h1>");
});
app.listen(port, () => {
  console.log(`App is listening on Port ${port}`);
});
// console.log(process.env.PORT);
