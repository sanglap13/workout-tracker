import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages";
import { Navbar } from "./components/shared";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/workouts" element={<Workouts />} />
            <Route path="/workouts/:id" element={<Workout />} />
            <Route path="/workouts/new" element={<NewWorkout />} />
            <Route path="/workouts/:id/edit" element={<EditWorkout />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
