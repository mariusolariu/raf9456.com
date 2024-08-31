import React, { useState } from "react";
import { Layout, Menu } from "antd";
import RoadToFM from "./blogs/RoadToFM";
import "../styles/Blog.css";
import CharityBowl from "./blogs/CharityBowl";

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
      blogComponent = <CharityBowl></CharityBowl>;
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
          <Menu.Item key="2">The Charity Bowl</Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Content style={{ overflow: "initial", padding: 0, margin: 0 }}>
          <div className="blogContentDiv">{blogComponent}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Blog;
