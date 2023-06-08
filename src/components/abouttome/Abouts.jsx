// pages/About.jsx

import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Project from '../pages/Project';



const Abouts = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Project} />
        </Routes>
      </div>
    </Router>
  );
};

export default Abouts;

