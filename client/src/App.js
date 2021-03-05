import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import About from "./pages/visible/About/About";
import VisibleNavbar from "./components/NavBar/VisibleNavbar";
import Contact from "./pages/visible/Contact/Contact";
import Footer from "./components/Footer";
import FlashFiction from "./pages/visible/FlashFiction/FlashFiction";
import Container from "./components/Container/Container";
import Books from "./pages/visible/Books/Books";
import Home from "./pages/visible/Home/Home";
import StoryContext from "./contexts/StoryContext";

function App() {
  const [stories, setStories] = useState([]);

  function loadStories() {
    console.log("loadStories ftn");

    let stories = fetch("/api/flashfiction/");
    stories
      .then((resp) => resp.json())
      .then((res) => {
        console.log("res is: ", res);
        setStories(res);
      });
  }

  useEffect(() => {
    loadStories();
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Container>
            <VisibleNavbar />
            <StoryContext.Provider value={stories}>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/books">
                <Books />
              </Route>
              <Route exact path="/flashfiction">
                <FlashFiction />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </StoryContext.Provider>
            <Footer />
          </Container>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
