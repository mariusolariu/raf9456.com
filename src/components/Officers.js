import React from "react";
import Card from "./Card";

const Officers = () => (
  <section id="membership">
    <h2>Officers</h2>
    <Card
      photo="./images/wmPeter.jpg"
      name="Peter Wilkinson"
      position="Worshipful Master"
      phoneNumber="&#48;&#55;&#57;&#51;&#48;&#32;&#51;&#51;&#48;&#49;&#50;&#53;"
      email="&#114;&#97;&#102;&#108;&#111;&#100;&#103;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
    />

    <Card
      photo="./images/nmAvatar.png"
      name="Neil Merchant"
      position="Secretary"
      email="&#115;&#101;&#99;&#114;&#101;&#116;&#97;&#114;&#121;&#114;&#97;&#102;&#57;&#52;&#53;&#54;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
    />

    <Card
      photo="./images/rmAvatar.png"
      name="Roger Millwater"
      position="Treasurer"
      email="&#116;&#114;&#101;&#97;&#115;&#117;&#114;&#101;&#114;&#114;&#97;&#102;&#57;&#52;&#53;&#54;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
    />
    <p style={{ marginBottom: "4rem" }}> </p>
  </section>
);

export default Officers;
