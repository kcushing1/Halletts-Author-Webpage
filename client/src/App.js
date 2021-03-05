import "./App.css";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import About from "./pages/visible/About/About";
import VisibleNavbar from "./components/NavBar/VisibleNavbar";
import Contact from "./pages/visible/Contact/Contact";
import Footer from "./components/Footer";
import FlashFiction from "./pages/visible/FlashFiction/FlashFiction";
import Container from "./components/Container/Container";
import Books from "./pages/visible/Books/Books";
import Home from "./pages/visible/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <VisibleNavbar />
          <FlashFiction />
          <Footer />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
