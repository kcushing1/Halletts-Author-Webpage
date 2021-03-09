import React from "react";
import "./home.css";
import Row from "../../../utils/Row";
import Col from "../../../utils/Row";
import { IconContext } from "react-icons";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  return (
    <div id="home">
      <Row>
        <div className="col text-left ml-4">
          <h1>WELCOME!</h1>
          <p className="m-4 greytext">
            You have found the author site of Hallett Sargent. if you enjoy rich
            character narratives, learning something new, and mysteries then you
            are in the right place!
          </p>

          <div className="row">
            <div className="col ml-5 mr-0">
              <img src="./images/arrow-line.png" id="arrow-line" />

              <img src="./images/download.jpg" id="arrow-head" />
            </div>
            <div className="col text-left m-l-0">
              <p>Start Reading!</p>
            </div>
          </div>
        </div>
        <div className="col">
          <img
            src="./images/tweetsexpl.jpg"
            alt="Twitter Musings Example"
            id="tweets"
          />
        </div>
      </Row>
    </div>
  );
}
