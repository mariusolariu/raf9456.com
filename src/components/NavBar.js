import React, { useState } from "react";
import "./../App.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="NavBar">
      <div className="menu-icon" onClick={toggleMenu}></div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home">
            <strong>Home</strong>
          </a>
        </li>
        <li>
          <a href="#about">
            <strong>About Us</strong>
          </a>
        </li>
        <li>
          <a href="#events">
            <strong>Meetings</strong>
          </a>
        </li>
        <li>
          <a href="#membership">
            <strong>Officers</strong>
          </a>
        </li>
        <li>
          <a href="#contact">
            <strong>Contact us</strong>
          </a>
        </li>
        <li>
          <a href="#membership">
            <strong>Young Masons Squadron</strong>
          </a>
        </li>
        <li>
          <a href="#contact">
            <strong>Blog</strong>
          </a>
        </li>
        <li>
          <a href="#contact">
            <strong>Privacy Policy</strong>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
