// Objective: studentRoutes.js - Define routes for CRUD operations on student data

const express = require("express");
const router = express.Router();

const Student = require("../models/student");

// CREATE (Insert many students)
router.post("/", async (req, res) => {
  const students = [
    { name: "Yassine", age: 19, city: "Rabat", major: "AI" },
    { name: "Sophia", age: 26, city: "Paris", major: "Cybersecurity" },
    { name: "Kaito", age: 22, city: "Tokyo", major: "Web Dev" },
    { name: "Elena", age: 31, city: "Madrid", major: "Data Science" },
    { name: "Marcus", age: 24, city: "New York", major: "AI" },
  ];

  const result = await Student.insertMany(students);

  res.json(result);
});

// READ ALL Students
router.get("/seed", async (req, res) => {
  const students = await Student.find();

  res.json(students);
});

// FILTER (Young Pros) 
router.get("/young", async (req, res) => {
  const students = await Student.find({
    age: { $gte: 18, $lte: 25 },
  });

  res.json(students);
});

// UPDATE Yassine → Casablanca 
router.put("/update-yassine", async (req, res) => {
  const result = await Student.updateOne(
    { name: "Yassine" },
    { $set: { city: "Casablanca" } },
  );

  res.json(result);
});

// DELETE Sophia 
router.delete("/delete-sophia", async (req, res) => {
  const result = await Student.deleteOne({ name: "Sophia" });

  res.json(result);
});

// UPDATE MANY (AI → Generative AI) 
router.put("/update-ai", async (req, res) => {
  const result = await Student.updateMany(
    { major: "AI" },
    { $set: { major: "Generative AI" } },
  );

  res.json(result);
});

module.exports = router;



