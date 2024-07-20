import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import MyHeader from "./components/MyHeader";
import About from "./components/About";
import Meetings from "./components/Meetings";
import Officers from "./components/Officers";
import YoungMasons from "./components/YoungMasons";
import Blog from "./components/Blog";
import Privacy from "./components/Privacy";
import Contact from "./components/Contact";
import { Flex, Layout, Button, Menu, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import MyFooter from "./components/MyFooter";
import {
  HOME,
  ABOUT,
  MEETINGS,
  CONTACT,
  OFFICERS,
  YOUNG_MASONS,
  PRIVACY,
  BLOG,
} from "./components/constants";
const { Header, Content, Footer } = Layout;

const items = [
  {
    label: <strong> Home </strong>,
    key: HOME,
  },
  {
    label: <strong> About Us</strong>,
    key: ABOUT,
  },
  {
    label: <strong> Meetings </strong>,
    key: MEETINGS,
  },
  {
    label: <strong> Officers</strong>,
    key: OFFICERS,
  },
  {
    label: <strong> Contatct us </strong>,
    key: CONTACT,
  },
  {
    label: <strong> Young Masons Squadron </strong>,
    key: YOUNG_MASONS,
  },
  {
    label: <strong>Blog</strong>,
    key: BLOG,
  },
  {
    label: <strong>Privacy Policy</strong>,
    key: PRIVACY,
  },
];

const App = () => {
  const [activePage, setActivePage] = useState(HOME);
  const [menuMobileVisible, setMobileMenuVisible] = useState(false);

  const updateActivePage = ({ key }) => {
    setActivePage(key);
    onClose();
  };

  const showDrawer = () => {
    setMobileMenuVisible(true);
  };

  const onClose = () => {
    setMobileMenuVisible(false);
  };

  let middleComponent = <Home></Home>;

  switch (activePage) {
    case HOME:
      middleComponent = <Home></Home>;
      break;

    case ABOUT:
      middleComponent = <About></About>;
      break;

    case MEETINGS:
      middleComponent = <Meetings></Meetings>;
      break;

    case OFFICERS:
      middleComponent = <Officers></Officers>;
      break;

    case CONTACT:
      middleComponent = <Contact></Contact>;
      break;

    case YOUNG_MASONS:
      middleComponent = <YoungMasons></YoungMasons>;
      break;

    case BLOG:
      middleComponent = <Blog></Blog>;
      break;

    case PRIVACY:
      middleComponent = <Privacy></Privacy>;
      break;

    default:
      middleComponent = <Home></Home>;
  }

  return (
    <Flex gap="middle" wrap>
      <Layout>
        <MyHeader></MyHeader>

        <Header>
          <div className="mobileHidden">
            <Menu
              theme={"dark"}
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={items}
              onClick={updateActivePage}
            ></Menu>
          </div>
          <Button
            className="mobileVisible"
            type="primary"
            onClick={() => showDrawer()}
            style={{ marginTop: "1rem" }}
          >
            <MenuOutlined />
            &nbsp;Menu
          </Button>

          <Drawer
            title="Menu"
            placement="right"
            onClose={() => onClose()}
            open={menuMobileVisible}
          >
            <Menu
              mode="vertical"
              defaultSelectedKeys={["1"]}
              items={items}
              onClick={updateActivePage}
            ></Menu>
          </Drawer>
        </Header>

        <Content className="contentStyle">
          <div className="root">
            <div className="main-content">{middleComponent}</div>
          </div>
        </Content>

        <Footer className="footerStyle">
          <MyFooter></MyFooter>
        </Footer>
      </Layout>
    </Flex>
  );
};

export default App;
