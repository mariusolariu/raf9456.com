import React from "react";
import "../styles/Footer.css";

const MyFooter = () => (
  <footer>
    <div className="flexFooter">
      <a
        href="https://warwickshirefreemasons.org.uk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="footer-logo"
          src="./images/pglwApprovedWebsite.png"
          alt="provincial grand lodge warwickshire"
        ></img>
      </a>

      <a
        href="https://www.ugle.org.uk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="footer-logo"
          src="./images/accreditedLodgeWebsite.jpeg"
          alt="ugle"
        ></img>
      </a>

      <img
        className="footer-logo"
        src="./images/raf9456LogoMini.png"
        alt="logo of lodge"
      ></img>
    </div>

    <p className="disclaimerP">
      Please note: We cannot guarantee that any link or feed from this site has
      been approved by the United Grand Lodge of England or the Provincial Grand
      Lodge of Warwickshire. Neither can we guarantee that any subsequent links
      from their pages are recognised by, or have the approval of the United
      Grand Lodge of England or the Provincial Grand Lodge of Warwickshire.
    </p>

    <div className="flexFooter">
      <ul className="footerList">
        <li>
          <a
            href="https://www.facebook.com/RAFLodge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook Page
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/groups/471856354289594"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook Group
          </a>
        </li>
        <li>
          <a
            href="https://x.com/raf9456"
            target="_blank"
            rel="noopener noreferrer"
          >
            X (Twitter)
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/groups/9162009"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin Group
          </a>
        </li>
      </ul>
    </div>

    <p>&copy; 2024 Warwickshire Royal Air Force 9456</p>
  </footer>
);

export default MyFooter;
