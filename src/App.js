import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Student from "./component/Student";
import Teacher from "./component/Teacher";
import Navbar from "./component/Navbar";

import { useState } from "react";
function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </div>
  );
}

export default App;
