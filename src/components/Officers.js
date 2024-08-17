import React from "react";
import Card from "./Card";

const Officers = () => (
  <section id="membership">
    <h2>Officers</h2>
    <Card
      photo="https://raw.githubusercontent.com/mariusolariu/raf9456.com/main/src/images/officers/peter.jpeg"
      name="Peter Wilkinson"
      position="Worshipful Master"
    />
    <Card name="Neil Merchant" position="Secretary" />
    <Card name="Roger Millwater" position="Treasurer" />
    <p style={{ marginBottom: "4rem" }}> </p>
  </section>
);

export default Officers;
