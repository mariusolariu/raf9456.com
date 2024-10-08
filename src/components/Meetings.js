import React from "react";
import data from "../data.json";
import { Badge, Calendar } from "antd";

const getListData = (value) => {
  let listData = []; // Specify the type of listData
  // RAF Cosford visit
  if (value.date() === 15 && value.month() === 11 && value.year() === 2024) {
    listData = [
      {
        type: "success",
        content: "Christmas Luncheon",
      },
    ];
  }

  if (value.date() === 11 && value.month() === 10 && value.year() === 2024) {
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
      if (meeting.slice(0, 2) === "11") {
        return (
          <>
            <p>
              {meeting}, Submit menu preferences
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScvmU0yCqpuFskQdIMxI0USli5didtM6GPE1neUiY5tAy61kg/viewform?embedded=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                here
              </a>
              , Ask for a summons{" "}
              <a
                href="https://raf9456november11meeting.splashthat.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
            </p>
          </>
        );
      } else {
        return (
          <>
            {meeting}, Submit menu preferences{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeiBG5AXXDMh4Tpc79dyiRhG7CLsbg0xEGrE5vmgkrRuW7dVw/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </>
        );
      }
    })}
    <p></p>

    <CellRender></CellRender>
  </section>
);

export default Meetings;
