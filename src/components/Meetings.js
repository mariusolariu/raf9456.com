import React from "react";
import data from "../data.json";
import { Badge, Calendar } from "antd";

const getListData = (value) => {
  let listData = []; // Specify the type of listData
  // RAF Cosford visit
  if (value.date() === 9 && value.month() === 8 && value.year() === 2024) {
    console.log(value.date());
    console.log(value.month());
    console.log(value.year());
    listData = [
      {
        type: "success",
        content: "RAF Cosford visit",
      },
    ];
  }

  if (value.date() === 11 && value.month() === 10 && value.year() === 2024) {
    console.log(value.date());
    console.log(value.month());
    console.log(value.year());
    listData = [
      {
        type: "success",
        content: "Masonic meeting",
      },
    ];
  }

  return listData || [];
};

const CellRender = () => {
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    return info.originNode;
  };

  return <Calendar cellRender={cellRender} />;
};

const Meetings = () => (
  <section id="events">
    <h2>Meetings</h2>
    {data.meetings.map((meeting) => (
      <p>{meeting}</p>
    ))}

    <CellRender></CellRender>
  </section>
);

export default Meetings;
