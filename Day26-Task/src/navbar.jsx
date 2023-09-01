import React from "react";
// import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="nav-item">
          <Link to="/">ALL</Link>
        </li>
        <li className="nav-item">
          <Link to="/fsd">FULL STACK DEVELOPMENT</Link>
        </li>
        <li className="nav-item">
          <Link to="/ds">DATA SCIENCE</Link>
        </li>
        <li className="nav-item">
          <Link to="/cs">CYBER SECURITY</Link>
        </li>
        <li className="nav-item">
          <Link to="/career">CAREER</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
