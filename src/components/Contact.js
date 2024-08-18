import React from "react";
import { Button, Form, Input, Row, Col } from "antd";

const onFinish = (values) => {
  // Construct the mailto link
  const mailtoLink = `mailto:${values.email}?subject=${encodeURIComponent(
    values.subject
  )}&body=${encodeURIComponent(values.message)}`;

  // Open the email client
  window.location.href = mailtoLink;
};

const onFinishFailed = (errorInfo) => {};

const { TextArea } = Input;

const Contact = () => {
  return (
    <section id="contact">
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12}>
          <div>
            <h2>Where to find us?</h2>
            <p>
              <strong>Address: </strong> 1621 Warwick Rd, Knowle, Solihull B93
              9LF, United Kingdom
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.8577844743486!2d-1.7402590227370933!3d52.39112837202768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b7a7f43baedd%3A0xb053ca937a870d41!2sKnowle%20Masonic%20Centre!5e0!3m2!1sen!2suk!4v1723994040732!5m2!1sen!2suk"
              width="1000vw"
              height="600vh"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
        <Col xs={24} sm={12}>
          <div style={{ marginTop: "4rem", marginLeft: "10rem" }}>
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
        </Col>
      </Row>
    </section>
  );
};

export default Contact;
