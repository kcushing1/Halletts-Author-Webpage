import React from "react";
import "./home.css";
import Row from "../../../utils/Row";
import Col from "../../../utils/Row";
import { IconContext } from "react-icons";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Row>
        <div className="col text-left ml-4">
          <h1>WELCOME!</h1>
          <p className="m-4 greytext">
            You have found the author site of Hallett Sargent. if you enjoy rich
            character narratives, learning something new, and mysteries then you
            are in the right place!
          </p>

          <IconContext.Provider
            value={{
              size: "3em",
              length: "30em",
              className: "arrow-hover greytext",
            }}
          >
            <Row>
              <BsArrowRight />
              <p className="mx-4 greytext ">Start Reading!</p>
            </Row>
          </IconContext.Provider>
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
