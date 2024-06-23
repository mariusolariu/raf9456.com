import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Footer from "./components/Footer";

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

const Header = () => (
  <header className="App-header">
    <div className="header-content">
      <h1>
        <strong>Royal Air Force L9456</strong>
      </h1>
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
    <h1 class="center">
      <strong>Welcome to the Royal Air Force L9456</strong>
    </h1>
    <div className="home-content">
      <img
        src="https://raw.githubusercontent.com/mariusolariu/raf9456.com/main/src/images/raf9456logo.png"
        alt="Lodge Emblem"
        className="lodge-logo"
      />
      <div className="text-content">
        <p>
          One of the oldest secular social and charitable organisations in the
          world, modern Freemasonry’s roots lie in the traditions of the
          medieval stonemasons who built our castles and cathedrals.
        </p>
        <p>
          For Freemasons, there are four important values that help define their
          path through life: Integrity, Friendship, Respect and Service. In
          today’s world filled with uncertainty, these principles ring as true
          now as they have at any point in the organisation’s history.
        </p>
        <p>
          Freemasonry provides a structure for members to come together under
          these common goals, enabling people to make new friendships, develop
          themselves and make valuable contributions to charitable causes. We
          are one of the largest charitable givers in the country, contributing
          £51.1m to deserving causes in 2020.
        </p>

        <h3>Our Values</h3>

        <h4>INTEGRITY</h4>
        <p>
          Rather than working on buildings like the masons of old, today’s
          Freemasons focus on building themselves as people of integrity, and
          membership provides the structure to help achieve that goal.
        </p>

        <h4>FRIENDSHIP</h4>
        <p>
          One of the oldest social organisations in the world, Freemasonry is
          not defined by an ideology. It is open to people from all religions
          and political persuasions and provides the common foundation for
          friendships between members, many of which will last for life.
        </p>

        <h4>RESPECT</h4>
        <p>
          With a membership of more than 150,000 people drawn from communities
          across the UK, Freemasonry brings people together irrespective of
          their race, religion or any other perceived differences that can
          divide us as a society.
        </p>

        <h4>SERVICE</h4>
        <p>
          Whether participating in events, fundraising for a charitable cause or
          volunteering for public or community organisations, service is at the
          very heart of Freemasonry. Our members make valuable contributions by
          donating time, resources and skills.
        </p>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about">
    <h2>About Us</h2>
    <div className="home-content">
      <h4>
        {" "}
        WHAT WE ARE <strong>(PURPOSE)</strong>
      </h4>
      <p>
        We are a unique members’ organisation that has thrived for over 300
        years. Having no political or religious affiliations, we comprise
        members of all ages, races, religions, cultures and backgrounds. We meet
        in our individual Lodges throughout the country where we have ceremonial
        traditions which encourage us both to be more tolerant and respectful
        and actively to fulfil our civic and charitable responsibilities; we
        also make time to eat, drink and meet together, and form lifelong
        friendships.
      </p>

      <h4>WHAT WE AIM FOR (VISION)</h4>
      <p>
        To attract those from all backgrounds and walks of life, enabling them
        to develop into more thoughtful and confident people. To inspire and
        challenge them to practise the core values we celebrate – Integrity,
        Friendship, Respect, Service– in their private and public lives. To
        cement our reputation as a force for good in our communities and society
        at large and as a thriving organisation that people aspire to join.
      </p>

      <h4>HOW WE WILL ACHIEVE THIS (MISSION)</h4>
      <br></br>

      <p>
        &nbsp; Over the next 7 years, we will enhance our reputation as a
        thriving organisation that people aspire to join and broaden our
        membership across all age groups.
      </p>
    </div>
  </section>
);

const Meetings = () => (
  <section id="events">
    <h2>Meetings</h2>
    <p>10 September 2024</p>
    <p>12 November 2024</p>
  </section>
);

const Officers = () => (
  <section id="membership">
    <h2>Officers</h2>
    <Card
      photo="https://raw.githubusercontent.com/mariusolariu/raf9456.com/main/src/images/officers/peter.jpeg"
      name="W.M. Peter Wilkinson"
    />
  </section>
);

const Contact = () => (
  <section id="contact">
    <h2>Contact Us</h2>
    <div className="home-content">
      <p>
        Membership is open to men over 18 from all backgrounds and the
        organisation’s aim is to empower members to be the best they can be –
        it’s about building character, supporting members as individuals and
        helping them make a positive contribution to society.
      </p>
    </div>
  </section>
);

export default App;
