const express = require("express");
require("dotenv").config();

//express app
const app = express();
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

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("Server is listening on port ", process.env.PORT);
});
