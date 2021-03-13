import React from "react";
import "./about.css";
import Container from "../../../components/Container/Container";
import VisibleNavbar from "../../../components/NavBar/VisibleNavbar";
import Footer from "../../../components/Footer";
import Row from "../../../utils/Row";
import Col from "../../../utils/Col";
import Image from "../../../utils/Image";
import FadeDiv from "../../../utils/FadeInDown";

export default function About() {
  return (
    <div id="about">
      <div className="row m-3 hidescroll">
        <div className="col aboutbox text-left">
          <FadeDiv>
            <h4>AUTHOR, EDUCATOR, AND EXPLORER</h4>

            <p className="greytext text-left">
              Hallett Sargent is a New England author whose focus is toward
              stories that encompass a duality of local and global significance.
              She writes in the hope of providing a comfortable place for
              introspective thought that translates beyond the narrative and
              into actions on a broader field. Her first book,
              <span className="font-italic"> Our Bathroom Mirror</span>, takes
              cues from her environmental and educational work to build
              complexity in what may at first appear to be a simple world.
              Sargent thrives on stories that provoke logical speculation and
              fervent emotion in equal turn. A genuine appreciation for
              narratives of unique characters is shared with those curious
              readers who pick up her works, which uncover a subtle yet deep
              experience.
            </p>
          </FadeDiv>
        </div>
        <Col>
          <FadeDiv>
            <Image
              alt="About Hallett"
              src="./images/flowers.jpg"
              className="rounded about-img mb-2"
            />
          </FadeDiv>
        </Col>
      </div>
    </div>
  );
}
