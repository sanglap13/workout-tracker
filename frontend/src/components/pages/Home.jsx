import React, { useEffect, useState } from "react";
import { WorkoutDetails } from "../shared";
import axios, { AxiosError } from "axios";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  const fetchWorkouts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/workouts/");
      if (!response.data)
        throw new AxiosError({ message: "No such Workout Present" }); // Creating AxiosError with custom message
      const { data } = response;
      setWorkouts(data);
    } catch (error) {
      //   console.log(error.message);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
