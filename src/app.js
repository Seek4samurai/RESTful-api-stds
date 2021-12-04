const express = require("express");
require("./db/conn");
// const Student = require("./models/students");
const studentRouter = require("./routers/stds");

// Environment Variables
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Calling Router
app.use(studentRouter);

// Listening to port 
app.listen(port, () => {
  console.log(`Connection at ${port}`);
});
