import React, { useState } from "react";
import "./../App.css";
import {
  HOME,
  ABOUT,
  MEETINGS,
  OFFICERS,
  CONTACT,
  YOUNG_MASONS,
  BLOG,
  PRIVACY,
} from "./constants";

const NavBar = ({ onHeaderItemPressed }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (clickedItemName) => {
    onHeaderItemPressed(clickedItemName);
  };

  return (
    <nav className="NavBar">
      <div className="menu-icon" onClick={toggleMenu}></div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="javascript:;" onClick={() => handleClick(HOME)}>
            <strong>Home</strong>
          </a>
        </li>
        <li>
          <a href="javascript:;" onClick={() => handleClick(ABOUT)}>
            <strong>About Us</strong>
          </a>
        </li>
        <li>
          <a href="javascript:;" onClick={() => handleClick(MEETINGS)}>
            <strong>Meetings</strong>
          </a>
        </li>
        <li>
          <a href="javascript:;" onClick={() => handleClick(OFFICERS)}>
            <strong>Officers</strong>
          </a>
        </li>
        <li>
          <a href="javascript:;" onClick={() => handleClick(CONTACT)}>
            <strong>Contact us</strong>
          </a>
        </li>
        <li>
          <a href="javascript:;" onClick={() => handleClick(YOUNG_MASONS)}>
            <strong>Young Masons Squadron</strong>
          </a>
        </li>
        <li>
          <a href="javascript:;" onClick={() => handleClick(BLOG)}>
            <strong>Blog</strong>
          </a>
        </li>
        <li>
          <a href="javascript:;" onClick={() => handleClick(PRIVACY)}>
            <strong>Privacy Policy</strong>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
