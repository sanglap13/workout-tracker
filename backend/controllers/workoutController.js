const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

//get all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get a workout by id
const getWorkoutById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such Workout Present" });
  try {
    const workout = await Workout.findById(id);

    if (!workout) {
      return res.status(404).json({ error: "No such Workout Present" });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//create a new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  //add document to DB
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a workout by id
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such Workout Present" });
  try {
    const workout = await Workout.findByIdAndDelete(id);
    if (!workout) {
      return res.status(404).json({ error: "No such Workout Present" });
    }
    res.status(200).json({ message: "Workout deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update a workout by id
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  //   const { title, reps, load } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No such Workout Present" });
  try {
    const workout = await Workout.findByIdAndUpdate(
      id,
      { ...req.body }
      //   { new: true }
    );
    if (!workout) {
      return res.status(404).json({ error: "No such Workout Present" });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getWorkouts,
  getWorkoutById,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
