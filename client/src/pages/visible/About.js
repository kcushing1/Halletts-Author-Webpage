import React from "react";
import Container from "../../components/Container/Container";
import VisibleNavbar from "../../components/NavBar/VisibleNavbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <Container>
      <VisibleNavbar />
      <h3>sub title</h3>
      <h5>author blurb</h5>
      <p>image</p>
      <Footer />
    </Container>
  );
}
