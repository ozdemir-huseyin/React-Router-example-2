import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <img
        src="https://hicoders.ch/wp-content/uploads/2022/11/hiCoders-Vector.png"
        alt="logo"
      />

      <NavLink to="/">Home</NavLink>
      <NavLink to="/teacher">Teacher</NavLink>
      <NavLink to="/student">Student</NavLink>
    </nav>
  );
}

export default Navbar;
