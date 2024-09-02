import React from "react";
import { Button, Form, Input } from "antd";
import Card from "./Card";

const onFinish = (values) => {
  // Construct the mailto link
  const mailtoLink = `mailto:raflodge@gmail.com
?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(
    values.message
  )}`;

  // Open the email client
  window.location.href = mailtoLink;
};

const onFinishFailed = (errorInfo) => {};

const { TextArea } = Input;

const Contact = () => {
  return (
    <section id="contact">
      <div>
        <h2>Where to find us?</h2>
        <p>
          <strong>Meeting address: </strong> 1621 Warwick Rd, Knowle, Solihull
          B93 9LF, United Kingdom
        </p>
        <p>
          <strong>RAF 9456 correspondence address: </strong>{" "}
          &#78;&#101;&#105;&#108; &#77;&#101;&#114;&#99;&#104;&#97;&#110;&#116;,
          &#53;&#54; &#67;&#114;&#97;&#110;&#109;&#111;&#114;&#101;
          &#82;&#111;&#97;&#100;, &#83;&#104;&#105;&#114;&#108;&#101;&#121;,
          &#83;&#111;&#108;&#105;&#104;&#117;&#108;, &#66;&#57;&#48;
          &#52;&#80;&#84;, &#87;&#101;&#115;&#116;
          &#77;&#105;&#100;&#108;&#97;&#110;&#100;&#115;
        </p>
        <p></p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.8577844743486!2d-1.7402590227370933!3d52.39112837202768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b7a7f43baedd%3A0xb053ca937a870d41!2sKnowle%20Masonic%20Centre!5e0!3m2!1sen!2suk!4v1723994040732!5m2!1sen!2suk"
          width="99%"
          height="600vh"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div style={{ marginTop: "4rem" }}>
        <h2> Key Contacts</h2>
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
      </div>

      <div style={{ marginTop: "4rem" }}>
        <h2>Contact us</h2>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Subject"
            name="subject"
            rules={[
              {
                required: true,
                message: "Please input a subject",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[
              {
                required: true,
                message: "Please input a message",
              },
            ]}
          >
            <TextArea rows={6} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
