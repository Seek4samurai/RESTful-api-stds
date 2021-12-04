const express = require("express");
require("./db/conn");
const studentRouter = require("./routers/stds");

// Environment Variables
const app = express();
const port = process.env.PORT || 8000;

// Calling Router
app.use(studentRouter);

// Middleware
app.use(express.json());

// Listening to port 
app.listen(port, () => {
  console.log(`Connection at ${port}`);
});
