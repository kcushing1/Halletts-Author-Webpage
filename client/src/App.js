import "./App.css";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import About from "./pages/visible/About/About";
import VisibleNavbar from "./components/NavBar/VisibleNavbar";
import Contact from "./pages/visible/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Contact />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
