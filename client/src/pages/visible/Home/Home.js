import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Row from "../../../utils/Row";
import Col from "../../../utils/Row";
import FadeDiv from "../../../utils/FadeInDown";
import HomeGalleryImg from "./HomeGalleryImg";
// import styled, { keyframes } from "styled-components";
// import { fadeInDown } from "react-animations";

// const fadeAnim = keyframes`${fadeInDown}`;
// const FadeDiv = styled.div`
//   animation: 5s ${fadeAnim};
// `;

export default function Home() {
  return (
    <div id="home">
      <Row>
        <div className="col text-left ml-4">
          <FadeDiv>
            <h1>WELCOME!</h1>
          </FadeDiv>
          <FadeDiv>
            <p className="m-4 greytext">
              You have found the author site of Hallett Sargent. If you enjoy
              rich character narratives, learning something new, and mysteries
              then you are in the right place!
            </p>
          </FadeDiv>

          <FadeDiv>
            <div className="ml-4">
              <Link to="/flashfiction">
                <div className="arrow-holder">
                  <img src="./images/download2.png" id="arrow-line" />

                  <p className="disappear greytext mt-2 ml-1">Start Reading!</p>
                </div>
              </Link>
            </div>
          </FadeDiv>
        </div>

        <div className="col mr-2 mb-4">
          <Row>
            <HomeGalleryImg />
            <HomeGalleryImg />
            <HomeGalleryImg />
          </Row>
          <Row>
            <HomeGalleryImg />
            <HomeGalleryImg />
            <HomeGalleryImg />
          </Row>
          <Row>
            <HomeGalleryImg />
            <HomeGalleryImg />
            <HomeGalleryImg />
          </Row>
        </div>
      </Row>
    </div>
  );
}
