import React from "react";
// import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="nav-item">ALL</li>
        <li className="nav-item">FULL STACK DEVELOPMENT</li>
        <li className="nav-item">DATA SCIENCE</li>
        <li className="nav-item">CYBER SECURITY</li>
        <li className="nav-item">CAREER</li>
      </ul>
    </nav>
  );
};

export default Navbar;
