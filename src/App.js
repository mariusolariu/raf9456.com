import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Meetings from "./components/Meetings";
import Officers from "./components/Officers";
import YoungMasons from "./components/YoungMasons";
import Blog from "./components/Blog";
import Privacy from "./components/Privacy";
import Contact from "./components/Contact";

import {
  HOME,
  ABOUT,
  MEETINGS,
  CONTACT,
  OFFICERS,
  YOUNG_MASONS,
  PRIVACY,
  BLOG,
} from "./components/constants";

// const PRIVACY = "privacy";

const App = () => {
  const [activePage, setActivePage] = useState(HOME);

  const updateActivePage = (newActivePage) => {
    console.log("New active page: " + newActivePage);
    setActivePage(newActivePage);
  };

  let middleComponent = <Home></Home>;

  switch (activePage) {
    case HOME:
      middleComponent = <Home></Home>;
      break;

    case ABOUT:
      middleComponent = <About></About>;
      break;

    case MEETINGS:
      middleComponent = <Meetings></Meetings>;
      break;

    case CONTACT:
      middleComponent = <Contact></Contact>;
      break;

    case OFFICERS:
      middleComponent = <Officers></Officers>;
      break;

    case YOUNG_MASONS:
      middleComponent = <YoungMasons></YoungMasons>;
      break;

    case BLOG:
      middleComponent = <Blog></Blog>;
      break;

    case PRIVACY:
      middleComponent = <Privacy></Privacy>;
      break;

    default:
      middleComponent = <Home></Home>;
  }

  return (
    <div class="root">
      <div class="main-content">
        <Header></Header>
        <NavBar onHeaderItemPressed={updateActivePage}></NavBar>
        {middleComponent}
      </div>

      <Footer />
    </div>
  );
};

export default App;
