const express = require("express");
const Workout = require("../models/workoutModel");

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
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

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
