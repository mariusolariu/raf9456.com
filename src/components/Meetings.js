import React from "react";
import data from "../data.json";

const Meetings = () => (
  <section id="events">
    <h2>Meetings</h2>
    {data.meetings.map((meeting) => (
      <p>{meeting}</p>
    ))}
  </section>
);

export default Meetings;
