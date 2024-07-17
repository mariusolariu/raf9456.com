import React, { useState } from "react";
import data from "../data.json";
import MyCarousel from "./MyCarousel";
import { Flex, Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./../styles/Home.css";

const { Header, Content } = Layout;

const Home = () => {
  const [menuMobileVisible, setMobileMenuVisible] = useState(false);

  const showDrawer = () => {
    setMobileMenuVisible(true);
    console.log("Show menu items");
  };

  const onClose = () => {
    console.log("close menu items");
    setMobileMenuVisible(false);
  };

  // const customTheme = {
  // algorithm: theme.darkAlgorithm,
  // darkItemColor: "#ffffff",
  // darkItemBg: "#02468f",
  // darkItemSelectedBg: "#1677ff",
  // horizontalItemHoverColor: "#1677ff",
  // horizontalItemSelectedColor: "#1677ff",
  // };

  return (
    <Flex gap="middle" wrap>
      <Layout>
        <Header>
          <div className="mobileHidden">
            <Menu theme={"dark"} mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <strong>
                  <u>Home</u>
                </strong>
              </Menu.Item>
              <Menu.Item key="2">
                <strong>
                  <u>About Us</u>
                </strong>
              </Menu.Item>
              <Menu.Item key="3">
                <strong>
                  <u>Meetings</u>
                </strong>
              </Menu.Item>
              <Menu.Item key="4">
                <strong>
                  <u>Officers</u>
                </strong>
              </Menu.Item>
              <Menu.Item key="5">
                <strong>
                  <u>Contact Us</u>
                </strong>
              </Menu.Item>
              <Menu.Item key="6">
                <strong>
                  <u>Young Masons Squadron</u>
                </strong>
              </Menu.Item>
              <Menu.Item key="7">
                <strong>
                  <u>Blog</u>
                </strong>
              </Menu.Item>
              <Menu.Item key="8">
                <strong>
                  <u>Privacy Policy</u>
                </strong>
              </Menu.Item>
            </Menu>
          </div>
          <Button
            className="mobileVisible"
            type="primary"
            onClick={() => showDrawer()}
          >
            <MenuOutlined />
          </Button>

          <Drawer
            title="Menu"
            placement="right"
            onClose={() => onClose()}
            open={menuMobileVisible}
          >
            <Menu mode="vertical" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">About Us</Menu.Item>
              <Menu.Item key="3">Meetings</Menu.Item>
              <Menu.Item key="4">Officers</Menu.Item>
              <Menu.Item key="5">Contact Us</Menu.Item>
              <Menu.Item key="6">Young Masons Squadron</Menu.Item>
              <Menu.Item key="7">Blog</Menu.Item>
              <Menu.Item key="8">Privacy Policy</Menu.Item>
            </Menu>
          </Drawer>
        </Header>

        <Content>
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
                />
              </div>
              <div className="text-content">
                <p>
                  One of the oldest secular social and charitable organisations
                  in the world, modern Freemasonry’s roots lie in the traditions
                  of the medieval stonemasons who built our castles and
                  cathedrals.
                </p>
                <p>
                  For Freemasons, there are four important values that help
                  define their path through life: Integrity, Friendship, Respect
                  and Service. In today’s world filled with uncertainty, these
                  principles ring as true now as they have at any point in the
                  organisation’s history.
                </p>
                <p>
                  Freemasonry provides a structure for members to come together
                  under these common goals, enabling people to make new
                  friendships, develop themselves and make valuable
                  contributions to charitable causes. We are one of the largest
                  charitable givers in the country, contributing £51.1m to
                  deserving causes in 2020.
                </p>

                <h3>Our Values</h3>

                <MyCarousel></MyCarousel>
              </div>
            </div>
          </section>
        </Content>
      </Layout>
    </Flex>
  );
};

export default Home;
