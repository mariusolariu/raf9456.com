import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Meetings from "./components/Meetings";
import Officers from "./components/Officers";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Home />
      <About />
      <Meetings />
      <Officers />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
