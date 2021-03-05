import React from "react";
import "./about.css";
import Container from "../../../components/Container/Container";
import VisibleNavbar from "../../../components/NavBar/VisibleNavbar";
import Footer from "../../../components/Footer";
import Row from "../../../utils/Row";
import Col from "../../../utils/Col";
import Image from "../../../utils/Image";

export default function About() {
  return (
    <div>
      <div className="row m-3 hidescroll">
        <div className="col aboutbox text-left">
          <h4>An author and educator with a strong curiosity</h4>
          <p className="greytext text-left">
            Lorem ipsum dolor sit amet, dolore soleat cum te, sint equidem an
            sea. Nec vide nonumy tibique at, eum id porro periculis adolescens.
            Ea sed modo dictas eligendi. Aperiri dolores sit te, id sea eros
            molestie. Pri et latine percipit pertinax, ad duo tamquam nominati
            periculis. An duo hinc persecuti, ius scaevola mandamus ad. In nulla
            erroribus theophrastus quo, ne atqui mundi tritani nam, et sed agam
            efficiantur. Ei bonorum urbanitas cotidieque pro, quem dicant pro
            te. Facilis reprimique pro cu. Ullum delenit dignissim ius ea.
          </p>
        </div>
        <Col>
          <Image
            alt="About Hallett"
            src="./images/flowers.jpg"
            className="rounded about-img mb-2"
          />
        </Col>
      </div>
    </div>
  );
}
