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
    <div className='header-content'>
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

    <h1><strong>Welcome to the Royal Air Force L9456</strong></h1>
    <div className="home-content">
      <img src="https://raw.githubusercontent.com/mariusolariu/raf9456.com/main/src/images/raf9456logo.png" alt="Lodge Emblem" className="lodge-logo" />
      <div className="text-content">
        <p>One of the oldest secular social and charitable organisations in the world, modern Freemasonry’s roots lie in the traditions of the medieval stonemasons who built our castles and cathedrals.</p>
        <p>For Freemasons, there are four important values that help define their path through life: Integrity, Friendship, Respect and Service. In today’s world filled with uncertainty, these principles ring as true now as they have at any point in the organisation’s history.</p>
        <p>Freemasonry provides a structure for members to come together under these common goals, enabling people to make new friendships, develop themselves and make valuable contributions to charitable causes. We are one of the largest charitable givers in the country, contributing £51.1m to deserving causes in 2020.</p>

       
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about">
    <h2>About Us</h2>
    <div className='home-content'> 
        <h4> WHAT WE ARE <strong>(PURPOSE)</strong></h4>
          <p>
            We are a unique members’ organisation that has thrived for over 300 years. Having no political or religious affiliations, we comprise members of all ages, races, religions, cultures and backgrounds. We meet in our individual Lodges throughout the country where we have ceremonial traditions which encourage us both to be more tolerant and respectful and actively to fulfil our civic and charitable responsibilities; we also make time to eat, drink and meet together, and form lifelong friendships.
          </p>

          <h4>WHAT WE AIM FOR (VISION)</h4>
          <p>
            To attract those from all backgrounds and walks of life, enabling them to develop into more thoughtful and confident people. To inspire and challenge them to practise the core values we celebrate – Integrity, Friendship, Respect, Service– in their private and public lives. To cement our reputation as a force for good in our communities and society at large and as a thriving organisation that people aspire to join.
          </p>

          <h4>
            HOW WE WILL ACHIEVE THIS (MISSION)
          </h4><br></br>
        
           <p>
           &nbsp; Over the next 7 years, we will enhance our reputation as a thriving organisation that people aspire to join and broaden our membership across all age groups.
          </p>
    </div>
          
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
