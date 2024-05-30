import React from 'react';
import './App.css';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Home />
      <About />
      <History />
      <Events />
      <Membership />
      <Contact />
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className="App-header">
    <div class="header-content">
      <h1><strong>Royal Air Force L9456</strong></h1>
      <div class="wrapper">
        <div class="typing-demo">
          <strong> Ad astra per aspera </strong>
        </div>
      </div>
    </div>
   
  </header>
);


const Home = () => (
  <section id="home">
    <img src="./../public/images/raf9456log.png" alt="Lodge Emblem" />
    
    <h1><strong>Welcome to the Royal Air Force L9456</strong></h1>
      <p> One of the oldest secular social and charitable organisations in the world, modern Freemasonry’s roots lie in the traditions of the medieval stonemasons who built our castles and cathedrals. </p>

      <p>  For Freemasons, there are four important values that help define their path through life: Integrity, Friendship, Respect and Service. In today’s world filled with uncertainty, these principles ring as true now as they have at any point in the organisation’s history. </p>

      <p>Freemasonry provides a structure for members to come together under these common goals, enabling people to make new friendships, develop themselves and make valuable contributions to charitable causes. We are one of the largest charitable givers in the country, contributing £51.1m to deserving causes in 2020.</p>
  </section>
);

const About = () => (
  <section id="about">
    <h2>About Us</h2>
    <p>Details about the lodge, its mission, and its values.</p>
  </section>
);

const History = () => (
  <section id="history">
    <h2>History</h2>
    <p>The history of the lodge, its founding, and significant milestones.</p>
  </section>
);

const Events = () => (
  <section id="events">
    <h2>Events</h2>
    <p>Upcoming events and meetings.</p>
  </section>
);

const Membership = () => (
  <section id="membership">
    <h2>Membership</h2>
    <p>Membership is open to men over 18 from all backgrounds and the organisation’s aim is to empower members to be the best they can be – it’s about building character, supporting members as individuals and helping them make a positive contribution to society.</p>
  </section>
);

const Contact = () => (
  <section id="contact">
    <h2>Contact Us</h2>
    <p>Contact information and a form for inquiries.</p>
  </section>
);

const Footer = () => (
  <footer>
    <p>&copy; 2024 Royal Air Force L9456</p>
    <ul>
      <li><a href="https://facebook.com">Facebook</a></li>
      <li><a href="https://twitter.com">Twitter</a></li>
      <li><a href="https://instagram.com">Instagram</a></li>
    </ul>
  </footer>
);

export default App;
