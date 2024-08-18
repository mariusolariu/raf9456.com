import React from "react";
import data from "../data.json";
import "./../styles/Home.css";
import "./../App.css";
import MyCarousel from "./MyCarousel";
import { Divider, Timeline, Collapse, theme } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const getFaqItems = (panelStyle) => [
  {
    key: "1",
    label: "Why become a Freemason?",
    children: (
      <p>
        People join Freemasonry for many different reasons, some join for the
        friendships they will make; friendships that last a lifetime and
        encompass the key milestones in life for better or worse. You will meet
        people who are different to you, those of different ages with radically
        different life experiences and interests, drawn together by common
        experience through Freemasonry. Our members are, and have been for three
        centuries, drawn from all walks of life. From Captains of industry and
        chief executives to manual labourers and forklift truck drivers, so you
        will find people with a wealth of different outlooks from all races,
        religions, classes and backgrounds. There are also those who enjoy the
        ceremonial aspects. Our meetings consist of centuries old lessons
        centered around you as an individual. How you live your life, the
        decisions that you make and how to become a better person are all found
        within our meetings. Freemasons are taught to look after those less
        fortunate than themselves, charity is our lifeblood and many members
        devote their time and energy to helping those less fortunate than
        themselves. We also have a huge amount of fun along the way, we eat,
        drink and meet together and form lifelong friendships.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "0",
    label: "Do you have to believe in God?",
    children: (
      <p>
        A belief in a 'supreme being' is a requirement. Freemasons generally
        believe in a God - be it Christian, Muslim, Sikh or Jewish etc - of some
        sort, even if they do not necessarily practice any particular religion.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "What goes on in a lodge meeting?",
    children: (
      <p>
        There are three ‘degree ceremonies’ performed during masonic meetings.
        They are essentially one act plays and teach members how to be better
        people and each play represents a different stage in life. As an
        ‘initiate’ or Entered Apprentice, Freemasons are taught we are all born
        equal, we learn that in life some do better than others and it is up to
        those that do well to look after the less fortunate. From this stems our
        belief in the importance of Charity. The next stage is to become a
        'Fellow Craft' where Freemasons are taught the importance of improving
        yourself as a person, and finally as a 'Master Mason', where we learn
        that we have but one life, and the importance of using it wisely. The
        details of the ceremonies can easily be accessed online but nothing
        beats experiencing it for yourself. After the meetings members dine
        together informally in order to enjoy good food, good wine, and good
        company. And most importantly, to have fun together.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "Why do freemasons wear approns?",
    children: (
      <p>
        The aprons stem from our historical and symbolic roots as stonemasons.
        Being leather, they were designed to protect them from sharp tools and
        rough stones. For today's Freemasons, the apron is a mark of their
        membership. They are presented with a white leather apron and as they
        progress this becomes more elaborate.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Can women be freemasons?",
    children: (
      <p>
        Only men aged over 18 are allowed to join the United Grand Lodge of
        England in England and Wales. <br></br>
        The two leading women's Grand Lodges, that we have the closest
        relationship, with are:{" "}
        <a href="https://hfaf.org/" target="_blank">
          Freemasonry for Women
        </a>{" "}
        and the{" "}
        <a href="https://www.owf.org.uk/" target="_blank">
          Order of Women Freemasons
        </a>
        . These two groups only admit women because that is the choice of their
        memberships. Both of the women's organisations, and ourselves, prefer to
        practice our Freemasonry in single sex environments. The{" "}
        <a href="https://www.ugle.org.uk/" target="_blank">
          United Grand Lodge of England
        </a>{" "}
        regularly hires its facilities out for meetings of the two women's
        Lodges due to our mutual respect and close relations.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: "What is different about the way freemasons give to charity?",
    children: (
      <>
        <p>
          It is the sheer scale.<br></br>
          We are one of the biggest charitable givers in the country and gave
          gave £51.1m to charities in 2020 alone. The{" "}
          <a href="https://mcf.org.uk/" target="_blank">
            Masonic Charitable Foundation
          </a>
          , the Freemasons’ Charity – our national charitable grant giving arm,
          tackles some of the most significant challenges facing society, in
          particular, reducing loneliness in later life and ensuring a positive
          future for young children. We work in partnership with some of the
          biggest charities in the country to deliver our support. Freemasonry
          also does a huge amount for medical research into treatments for
          cancer, diabetes, heart disease and a whole range of other conditions.
          In addition it makes donations to support those affected by overseas
          disasters as well as those at home, such as the Grenfell Tower
          disaster. During the Covid Pandemic Freemasons working together to
          help their communities. The United Grand Lodge of England, and its
          members, are doing all they can to help in the fight the coronavirus.
        </p>
        <p>
          We have seen remarkable stories from across the country of how our
          members came together – from helping to raise vital funds for the NHS
          and delivering food to the community, through to purchasing ambulances
          and manufacturing vital personal protective equipment (PPE). To
          support Freemasonry’s charitable response to the coronavirus pandemic,
          UGLE and the Masonic Charitable Foundation, the Freemasons’ charity,
          established the Freemasons’ COVID-19 Community Fund. This Fund has
          helped to support a range of local and national charities and projects
          that are helping people through the current coronavirus pandemic and
          in total has donated £3m during the pandemic.
        </p>
      </>
    ),
    style: panelStyle,
  },
  {
    key: "6",
    label: "Is freemasonry international?",
    children: (
      <p>
        Freemasonry exists throughout the world and the{" "}
        <a href="https://www.ugle.org.uk/" target="_blank">
          United Grand Lodge of England
        </a>{" "}
        has Districts in many oversees countries. Our members are free to visit
        any of our Lodges abroad and will often find a warm welcome from fellow
        members who know the local country very well. <br></br>
        In addition to our Lodges, many other counties have sovereign grand
        lodges, which our members are free to visit and whose members visit us
        in England and Wales when travelling.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "7",
    label: "How many freemasons are in the world?",
    children: (
      <p>
        The{" "}
        <a href="https://www.ugle.org.uk/" target="_blank">
          United Grand Lodge of England
        </a>{" "}
        has 180,000 members. The{" "}
        <a href="https://www.grandlodgescotland.com/" target="_blank">
          Grand Lodge of Scotland
        </a>{" "}
        and{" "}
        <a href="https://freemason.ie/" target="_blank">
          Ireland
        </a>{" "}
        also have 10,000 members and the two female grand lodges in England
        comprise of around 25,000 members. Worldwide there are estimated to be
        around six million members.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "8",
    label: "How much does it cost to become a freemason?",
    children: (
      <p>
        On average the annual dues and other fees amount to £200 a year,
        although there are local variations.
      </p>
    ),
    style: panelStyle,
  },
];

const Home = () => {
  // const customTheme = {
  // algorithm: theme.darkAlgorithm,
  // darkItemColor: "#ffffff",
  // darkItemBg: "#02468f",
  // darkItemSelectedBg: "#1677ff",
  // horizontalItemHoverColor: "#1677ff",
  // horizontalItemSelectedColor: "#1677ff",
  // };

  const { token } = theme.useToken();

  const panelStyle = {
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    fontSize: "medium",
  };

  const mediumFontSize = {
    fontSize: "medium",
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1 className="homeWelcomeMessage">
          <strong>{data.home.title}</strong>
        </h1>
      </div>
      <div className="home-content">
        <div className="logo-image-div">
          <img
            src="https://raw.githubusercontent.com/mariusolariu/raf9456.com/main/src/images/raf9456logo.png"
            alt="Lodge Emblem"
            className="lodge-logo"
            style={{ maxWidth: "90vw" }}
          />
        </div>
        <div className="text-content">
          <h3>What is Freemasony</h3>
          <p>What is Freemasonry and why might you become a Freemason?</p>
          <p>
            Freemasonry offers its members opportunities to create a wide circle
            of enduring friendships. Through shared interests and encounters
            with individuals from varied backgrounds, Freemasonry fosters the
            cultivation of lifelong bonds. <br></br>
            <strong>You will make new friendships.</strong>
          </p>

          <p>
            Freemasonry prioritises character building and individual support,
            laying the groundwork for members to enhance themselves. These
            principles enable personal growth, fostering attributes like
            heightened self-confidence and valuable skills such as public
            speaking. <br></br>
            <strong>You will develop yourself.</strong>
          </p>

          <p>
            Service lies at the core of Freemasonry, whether through event
            participation, fundraising for charitable endeavours, or
            volunteering for public and community organisations. Our members
            contribute significantly by donating their time, resources, and
            skills.<br></br>
            <strong>You will make a positive contribution to society.</strong>
          </p>

          <p>
            Learn more{" "}
            <strong>
              <a
                href="https://drive.google.com/file/d/1xE50b5PK-mOv0f_LD4UvsDL95fVOqpZI/view
"
                target="_blank"
              >
                here
              </a>
            </strong>
            .
          </p>

          <Divider />

          <h3>How to join our Lodge</h3>

          <p>
            Membership is open to people from all backgrounds and the
            organisation's aim is to empower members to be the best they can be
            - it's about building character, supporting members as individuals
            and helping them make a positive contribution to society.
          </p>

          <p>
            Any man over the age of 18 is welcome to join RAF 9456, irrespective
            of their race or religion.
          </p>

          <p>
            There are two female-only Grand Lodges: The Order of Women
            Freemasons and HFAF - Freemasonry for Women. They both follow
            exactly the same ceremonies and wear the same regalia as male
            Freemasons, and they often work closely with community and charity
            projects.
          </p>

          <h3>The joining process</h3>

          <Timeline
            items={[
              {
                children: (
                  <>
                    <p style={mediumFontSize}>
                      <strong> 1. Register your interest </strong> <br></br>
                      All you need to do is simply contact us to register your
                      interest at{" "}
                      <a href="mailto:&#115;&#101;&#99;&#114;&#101;&#116;&#97;&#114;&#121;&#114;&#97;&#102;&#57;&#52;&#53;&#54;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
                        &#115;&#101;&#99;&#114;&#101;&#116;&#97;&#114;&#121;&#114;&#97;&#102;&#57;&#52;&#53;&#54;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
                      </a>{" "}
                    </p>
                  </>
                ),
              },
              {
                children: (
                  <>
                    <p style={mediumFontSize}>
                      <strong> 2. Fill in a form</strong> <br></br>
                      We will then contact you and ask you to complete a short
                      form.
                    </p>
                  </>
                ),
              },
              {
                children: (
                  <>
                    <p style={mediumFontSize}>
                      <strong> 3. Meeting us </strong> <br></br>
                      After receiving your short form, arrangements will be made
                      to meet you socially to find out more about you, and to
                      give you a chance to find out more about us. <br></br>
                      You would then in due course be invited to meet a
                      committee of Past Masters from our Lodge prior to being
                      balloted for membership. All being well, a date would then
                      be fixed for your admission.
                    </p>
                  </>
                ),
              },
            ]}
          />

          <Divider></Divider>

          <h3>Our Values</h3>
          <MyCarousel></MyCarousel>

          <h3>Browse our FAQ to learn more about Freemasonry</h3>

          <Collapse
            bordered={false}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            items={getFaqItems(panelStyle)}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
