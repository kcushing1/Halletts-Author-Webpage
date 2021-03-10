import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Row from "../../../utils/Row";
import Col from "../../../utils/Row";
//import { Animated } from "react-animated-css";

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

          <div className="ml-4">
            <Link to="/flashfiction">
              <div className="arrow-holder">
                <img src="./images/download2.png" id="arrow-line" />

                <p class="disappear greytext mt-2 ml-1">Start Reading!</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="col mr-2 mb-4">
          <Row>
            <div className="col m-1">
              <img src="/images/thumbnails/flowers_tn.jpg" />
            </div>
            <div className="col m-1">
              <img src="/images/thumbnails/flowers_tn.jpg" />
            </div>
            <div className="col m-1">
              <img src="/images/thumbnails/flowers_tn.jpg" />
            </div>
          </Row>
          <Row>
            <div className="col m-1">
              <img src="/images/thumbnails/flowers_tn.jpg" />
            </div>
            <div className="col m-1">
              <img src="/images/thumbnails/flowers_tn.jpg" />
            </div>
            <div className="col m-1">
              <img src="/images/thumbnails/flowers_tn.jpg" />
            </div>
          </Row>
          <Row>
            <div className="col m-1">
              <img src="/images/thumbnails/flowers_tn.jpg" />
            </div>
            <div className="col m-1">
              <img src="/images/thumbnails/flowers_tn.jpg" />
            </div>
            <div className="col m-1">
              <img src="/images/thumbnails/flowers_tn.jpg" />
            </div>
          </Row>
        </div>
      </Row>
    </div>
  );
}
