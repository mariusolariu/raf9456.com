import React from "react";
import data from "../data.json";

const Home = () => (
  <section id="home">
    <h1 class="center">
      <strong>{data.home.title}</strong>
    </h1>
    <div className="home-content">
      <div className="logo-image-div">
        <img
          src="https://raw.githubusercontent.com/mariusolariu/raf9456.com/main/src/images/raf9456logo.png"
          alt="Lodge Emblem"
          className="lodge-logo"
        />
      </div>

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

export default Home;
