import React, { useState } from "react";
import { Layout, Menu } from "antd";
import RoadToFM from "./blogs/RoadToFM";
import "../App.css";

const { Sider, Content } = Layout;

const Blog = () => {
  const [activeBlogArticleIndex, setActiveBlogArticleIndex] = useState("1");

  const handleMenuClick = ({ key }) => {
    switch (key) {
      case "1":
        console.log(key);
        setActiveBlogArticleIndex("1");
        break;

      case "2":
        console.log(key);
        setActiveBlogArticleIndex("2");
        break;
      default:
        setActiveBlogArticleIndex(RoadToFM);
    }
  };

  let blogComponent = <RoadToFM></RoadToFM>;

  switch (activeBlogArticleIndex) {
    case "1":
      blogComponent = <RoadToFM></RoadToFM>;
      break;

    case "2":
      blogComponent = <p>Test</p>;
      break;

    default:
      blogComponent = <RoadToFM></RoadToFM>;
  }

  return (
    <Layout hasSider>
      <Sider collapsible width={220}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" onClick={handleMenuClick}>
          <Menu.Item key="1">{"The Road to Freemasonry"}</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Content style={{ overflow: "initial", padding: 0, margin: 0 }}>
          <div
            style={{
              padding: 0,
              textAlign: "left", // Aligns text to the left
              height: "100vh", // Makes the content take full height
              display: "flex", // Flexbox to align content at the top-left
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
              paddingLeft: "3rem",
              paddingTop: "1rem",
              paddingRight: "1rem",
              fontSize: "medium",
            }}
          >
            {blogComponent}
          </div>
        </Content>
      </Layout>

      <p style={{ marginBottom: "50rem" }}></p>
    </Layout>
  );
};

export default Blog;
