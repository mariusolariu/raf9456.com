import React from "react";
import data from "../data.json";
import MyCarousel from "./MyCarousel";

const Home = () => {
  return (
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
            For Freemasons, there are four important values that help define
            their path through life: Integrity, Friendship, Respect and Service.
            In today’s world filled with uncertainty, these principles ring as
            true now as they have at any point in the organisation’s history.
          </p>
          <p>
            Freemasonry provides a structure for members to come together under
            these common goals, enabling people to make new friendships, develop
            themselves and make valuable contributions to charitable causes. We
            are one of the largest charitable givers in the country,
            contributing £51.1m to deserving causes in 2020.
          </p>

          <h3>Our Values</h3>

          <MyCarousel></MyCarousel>
        </div>
      </div>
    </section>
  );
};

export default Home;
