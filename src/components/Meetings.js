import React from "react";
import data from "../data.json";
import { Badge, Calendar } from "antd";

const getListData = (value) => {
  let listData = []; // Specify the type of listData

  if (value.date() === 14 && value.month() === 4 && value.year() === 2025) {
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
    {data.meetings.map((meeting) => {
      return <>{meeting}</>;
    })}
    <p></p>

    <CellRender></CellRender>
  </section>
);

export default Meetings;
