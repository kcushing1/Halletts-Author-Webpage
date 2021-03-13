import "./App.css";
import React, { useState, useEffect, useContext } from "react";
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
import AdminNavbar from "./components/NavBar/AdminNavbar";
import AdminHome from "./pages/admin/AdminHome";
import ReadContext from "./contexts/ReadContext";
import AdminFlashFiction from "./pages/admin/AdminFlashFiction";
import Messages from "./pages/admin/Messages";
import Login from "./pages/admin/Login";
import AuthContext from "./contexts/AuthContext";
import SecuredRoute from "./utils/SecuredRoute";

function App() {
  const [stories, setStories] = useState([]);
  const [read, setRead] = useState([]);
  const [auth, setAuth] = useState();

  const onAuth = (data) => {
    setAuth({ ...data });
  };

  const update = (data) => {
    setRead({ ...read, ...data });
  };

  function loadStories() {
    let stories = fetch("/api/flashfiction/");
    stories
      .then((resp) => resp.json())
      .then((res) => {
        setStories(res);
      });
  }

  useEffect(() => {
    loadStories();
  }, []);

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ ...auth, onAuth }}>
        <div className="App">
          <Switch>
            <Container>
              <StoryContext.Provider value={stories}>
                <ReadContext.Provider value={{ ...read, update }}>
                  <Route exact path="/login">
                    <Login />
                  </Route>

                  <Route
                    exact
                    path={["/admin", "/admin/flashfiction", "/admin/messages"]}
                  >
                    <AdminNavbar />
                  </Route>
                  <Route exact path="/admin">
                    <AdminHome />
                  </Route>
                  <Route exact path="/admin/flashfiction">
                    <AdminFlashFiction />
                  </Route>
                  <Route exact path="/admin/messages">
                    <Messages />
                  </Route>

                  <Route
                    exact
                    path={[
                      "/",
                      "/about",
                      "/books",
                      "/flashfiction",
                      "/contact",
                    ]}
                  >
                    <VisibleNavbar />
                  </Route>
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
                </ReadContext.Provider>
              </StoryContext.Provider>
              <Footer />
            </Container>
          </Switch>
        </div>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
