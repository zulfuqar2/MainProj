import React from "react";
import { connect } from "react-redux";
import WeApp from "../src/components/WeApp";
import Abouts from "./components/abouttome/Abouts";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Project from "./components/pages/Project";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

const App = ({ location }) => {
  return (
    <div>
      {location && (
        <div>
          Location at now: {location.latitude}, {location.longitude}
        </div>
      )}
      <div className="sa">
        <Abouts />
        <Routes>
          <Route exact path="/" element={<WeApp />} />
          <Route exact path="/Home" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path ="/contact" element={<Contact/>}/>
          <Route exact path = "/projects" element={<Project/>}/>
        </Routes>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  location: state.location,
});
export default connect(mapStateToProps)(App);

