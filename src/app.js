const express = require("express");

const port = process.env.PORT || 8000;
const app = express();

const Student = require("./models/students");
require("./db/conn")

// Create new students 
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());

// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);

//   user.save().then(() => {
//     res.status(201).send(user);
//   }).catch((e) => {
//     res.status(400).send(e);
//   })
// });

app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`Connection at ${port}`);
});
