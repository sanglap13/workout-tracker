const express = require("express");
require("dotenv").config();

//express app
const app = express();
const mongoose = require("mongoose");
const workoutsRouter = require("./routes/workouts");

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutsRouter);
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to the application." });
// });

//connect to mongodb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to mongodb");
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Server is listening on port ", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
