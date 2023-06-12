import React from "react";
import { Link } from "react-router-dom";
import "../abouttome/About.css";
const Abouts = () => {
  return (
    <div className="div">
      <nav className="nav">
        <p>
          <Link to="/Home"> Home</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/contact">Contact</Link>
        </p>
        <p>
          <Link to="/projects">Projects</Link>
        </p>
      </nav>
    </div>
  );
};
export default Abouts;
