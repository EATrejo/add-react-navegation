import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="click-here active">
          <Link to="/contact">Happy Birthday dad!</Link>
        </li>
      </ul>
    </nav>
  );
};
