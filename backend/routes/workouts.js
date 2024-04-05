const express = require("express");

const router = express.Router();

//GET all workouts
router.get("/", (req, res) => {
  res.json({ message: "Get all workouts" });
});

//GET a workout by id
router.get("/:id", (req, res) => {
  res.json({ message: "Get a workout by id" });
});

//POST a new workout
router.post("/", (req, res) => {
  res.json({ message: "Post a new workout" });
});

//DELETE a workout by id
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a workout by id" });
});

//UPDATE a workout by id
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a workout by id" });
});

module.exports = router;
