// Creating Router
const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

// Creating URLs
router.get("/", (req, res) => {
  res.send("Hello World");
});

// Creating data
router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    // console.log(req.body);
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Reading data
router.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    if (!studentsData) {
      return res.status(404).send();
    } else {
      res.send(studentsData);
    }
  } catch (e) {
    res.send(e);
  }
});

// Reading data using IDs
router.get("/students/:id", async (req, res) => {
  try {
    const _id = await req.params.id;
    const studentData = await Student.find({ _id });
    res.send(studentData);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Update Student's Data by ID
router.patch("/students/:id", async (req, res) => {
  try {
    const _id = await req.params.id;
    const updateStudents = await Student.findByIdAndUpdate({ _id },
      req.body,
      {
        new: true
      });
    res.send(updateStudents);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Delete Student's Data by I
router.delete("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete({ id });
    if (!id) {
      return res.status(400).send();
    }
    else {
      res.send(deleteStudent);
    }
  } catch (e) {
    res.status(500).send(e);
  }
})

module.exports = router;