const express = require("express");
const {
  getWorkouts,
  getWorkoutById,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

//GET all workouts
router.get("/", getWorkouts);

//GET a workout by id
router.get("/:id", getWorkoutById);

//POST a new workout
router.post("/", createWorkout);

//DELETE a workout by id
router.delete("/:id", deleteWorkout);

//UPDATE a workout by id
router.patch("/:id", updateWorkout);

module.exports = router;
