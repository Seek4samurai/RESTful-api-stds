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

// Creating data

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

// Reading data

app.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    if (!studentData) {
      return res.status(404).send();
    } else {
      res.send(studentData);
    }
    res.send(studentsData);
  } catch (e) {
    res.send(e);
  }
});

// Reading data using IDs

app.get("/students/:id", async (req, res) => {
  try {
    const _id = await req.params.id;
    const studentData = await Student.find({ _id });
    res.send(studentData);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Reading by Student Name

// app.get("/students/:name", async (req, res) => {
//   try {
//     const sname = await req.params.name;
//     const studentData = await Student.find({ name: sname });
//     res.send(studentData);
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

// Listening to port 
app.listen(port, () => {
  console.log(`Connection at ${port}`);
});
