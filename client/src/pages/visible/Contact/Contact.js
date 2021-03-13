import React, { useState } from "react";
import "./contact.css";
import Container from "../../../components/Container/Container";
import VisibleNavbar from "../../../components/NavBar/VisibleNavbar";
import Col from "../../../utils/Col";
import FormInput from "../../../utils/FormInput";
import Row from "../../../utils/Row";
import { SocialIcon } from "react-social-icons";
import FadeDiv from "../../../utils/FadeInDown";

export default function Contact() {
  const [message, setMessage] = useState([]);
  const [messageSent, setMessageSent] = useState({ hasBeenSent: false });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  }

  function handleSubmitMessage(e) {
    if (message.name && message.email && message.text) {
      const send = fetch("/api/message/create", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(message),
      });
      send
        .then((resp) => resp.json())
        .then((res) => {
          setMessageSent({ hasBeenSent: true });
        });
    }
  }

  return (
    <Row id="contact">
      <Col>
        <FadeDiv>
          <Row>
            <div className="col m-3">
              <h4>LET'S GET IN TOUCH!</h4>
              <p className="greytext">
                To see more active updates on my writing, current reads, or
                interesting tidbits, you can visit any of my various social
                media platforms. Or leave me a message here!{" "}
              </p>
            </div>
          </Row>
          <Row>
            <div className="col"></div>
            <div className="col mx-3 pb-3">
              <SocialIcon
                network="instagram"
                url="https://www.instagram.com/halfbakedharvest/?hl=en"
                bgColor="#cd486b"
                style={{ height: 25, width: 25 }}
              />
            </div>
            <Col>
              <SocialIcon
                network="twitter"
                url="https://twitter.com/oprah"
                style={{ height: 25, width: 25 }}
              />
            </Col>
            <div className="col"></div>
          </Row>
        </FadeDiv>
      </Col>

      <FadeDiv>
        <Col>
          {messageSent.hasBeenSent && (
            <h5 className="greytext">You sent a message to Hallett!</h5>
          )}
          <div className="form-group pr-4 mx-5">
            <FormInput
              id="sayhi"
              placeholder="Your Name"
              type="text"
              name="name"
              onChange={handleInputChange}
            />
            <FormInput
              type="text"
              id="Email"
              placeholder="Your Email"
              name="email"
              onChange={handleInputChange}
            />
            <textarea
              id="message"
              className="form-control m-3 p-2"
              placeholder="Your Message Here"
              name="text"
              onChange={handleInputChange}
            ></textarea>
            <button
              type="submit"
              className="btn border contact-btn"
              onClick={handleSubmitMessage}
            >
              Send Message
            </button>
          </div>
        </Col>
      </FadeDiv>
    </Row>
  );
}
