import React from "react";
import data from "../data.json";
import "./../styles/Home.css";
import "./../App.css";
import MyCarousel from "./MyCarousel";

const Home = () => {
  // const customTheme = {
  // algorithm: theme.darkAlgorithm,
  // darkItemColor: "#ffffff",
  // darkItemBg: "#02468f",
  // darkItemSelectedBg: "#1677ff",
  // horizontalItemHoverColor: "#1677ff",
  // horizontalItemSelectedColor: "#1677ff",
  // };

  return (
    <section id="home">
      <div
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1 style={{ width: "45rem" }}>
          <strong>{data.home.title}</strong>
        </h1>
      </div>
      <div className="home-content">
        <div className="logo-image-div">
          <img
            src="https://raw.githubusercontent.com/mariusolariu/raf9456.com/main/src/images/raf9456logo.png"
            alt="Lodge Emblem"
            className="lodge-logo"
            style={{ maxWidth: "30rem" }}
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
