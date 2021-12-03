const express = require("express");
const mongoose = require("mongoose");
const validator = require("validator");
const port = process.env.PORT || 8000;
const app = express();

// Create new students 
app.get("/", (req, res) => {
  res.send("Hello World");
})
app.post("/students", (req, res) => {
  res.send("/students");
})

app.listen(port, () => {
  console.log(`Connection at ${port}`);
});
