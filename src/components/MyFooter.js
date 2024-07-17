import React from "react";
import "../styles/Footer.css";

const MyFooter = () => (
  <footer>
    <p>&copy; 2024 Royal Air Force L9456</p>
    <ul>
      <li>
        <a href="https://facebook.com">Facebook</a>
      </li>
      <li>
        <a href="https://twitter.com">Twitter</a>
      </li>
      <li>
        <a href="https://instagram.com">Instagram</a>
      </li>
    </ul>
    <img
      className="footer-logo"
      src="./images/raf9456LogoMini.png"
      alt="logo of lodge"
    ></img>
  </footer>
);

export default MyFooter;
