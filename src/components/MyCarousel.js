import React from "react";
import { Carousel } from "antd";
import "../styles/MyCarouselStyle.css";

import styled from "styled-components";

const carouselOptions = {
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
  adaptiveHeight: true,
};

const carouselItem = {
  alignContent: "center",
  padding: "2rem",
};

const flexTextH3 = {
  maxWidth: "10rem",
  marginTop: 0,
  textAlign: "left",
};

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
  color: #fff;
  background: #02468f;
  padding: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left;
  }
`;

const FlexImage = styled.img`
  max-width: 21vw;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    max-width: 30vw;
  }
`;

const FlexText = styled.div`
  max-width: 35rem;
  textalign: "left";

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const values = [
  {
    title: "INTEGRITY",
    text: "Rather than working on buildings like the masons of old, today’s Freemasons focus on building themselves as people of integrity, and membership provides the structure to help achieve that goal.",
    photoLoc: "./images/integrity.jpg",
    id: 1,
  },
  {
    title: "FRIENDSHIP",
    text: "One of the oldest social organisations in the world, Freemasonry is not defined by an ideology. It is open to people from all religions and political persuasions and provides the common foundation for friendships between members, many of which will last for life.",
    photoLoc: "./images/friendship.jpg",
    id: 2,
  },
  {
    title: "RESPECT",
    text: "With a membership of more than 150,000 people drawn from communities across the UK, Freemasonry brings people together irrespective of their race, religion or any other perceived differences that can divide us as a society.",
    photoLoc: "./images/respect.jpg",
    id: 3,
  },
  {
    title: "SERVICE",
    text: "Whether participating in events, fundraising for a charitable cause or volunteering for public or community organisations, service is at the very heart of Freemasonry. Our members make valuable contributions by donating time, resources and skills.",
    photoLoc: "./images/service.jpg",
    id: 4,
  },
];

const MyCarousel = () => {
  return (
    <div style={{ maxWidth: "90rem", maxHeight: "25rem" }}>
      <Carousel {...carouselOptions}>
        {values.map((value) => {
          return (
            <div style={carouselItem} key={value.id}>
              <FlexContainer>
                <FlexImage
                  src={value.photoLoc}
                  alt="representing masonic value"
                ></FlexImage>
                <FlexText>
                  <h3 style={flexTextH3}>{value.title}</h3>
                  <p>
                    <strong>{value.text}</strong>
                  </p>
                </FlexText>
              </FlexContainer>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
