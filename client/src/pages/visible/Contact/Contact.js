import React from "react";
import Container from "../../../components/Container/Container";
import VisibleNavbar from "../../../components/NavBar/VisibleNavbar";
import Col from "../../../utils/Col";
import FormInput from "../../../utils/FormInput";
import Row from "../../../utils/Row";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
  return (
    <Container>
      <VisibleNavbar />
      <Row>
        <Col>
          <Row>
            <div className="col m-3">
              <h4>Let's get in touch!</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
          </Row>
          <Row>
            <div className="col mx-3 pb-3">
              <SocialIcon
                network="instagram"
                url="https://www.instagram.com/halfbakedharvest/?hl=en"
              />
            </div>
            <Col>
              <SocialIcon network="twitter" url="https://twitter.com/oprah" />
            </Col>
          </Row>
        </Col>

        <Col>
          <div className="form-group pr-4 mx-5">
            <FormInput id="sayhi" placeholder="Your Name" type="text" />
            <FormInput type="text" id="Email" placeholder="Your Email" />
            <textarea
              id="message"
              className="form-control m-3 p-2"
              placeholder="Your Message Here"
            ></textarea>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
