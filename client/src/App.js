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
import AdminNavbar from "./components/NavBar/AdminNavbar";
import AdminHome from "./pages/admin/AdminHome";
import ReadContext from "./contexts/ReadContext";
import AdminFlashFiction from "./pages/admin/AdminFlashFiction";
import Messages from "./pages/admin/Messages";

function App() {
  const [stories, setStories] = useState([]);
  const [read, setRead] = useState([]);
  const placeholderStory = {
    id: 0,
    title: "example title",
    text:
      "Lorem ipsum dolor sit amet, dolore soleat cum te, sint equidem an sea. Nec vide nonumy tibique at, eum id porro periculis adolescens.Ea sed modo dictas eligendi. Aperiri dolores sit te, id sea eros molestie. Pri et latine percipit pertinax, ad duo tamquam nominati periculis. An duo hinc persecuti, ius scaevola mandamus ad. In nulla erroribus theophrastus quo, ne atqui mundi tritani nam, et sed agam efficiantur. Ei bonorum urbanitas cotidieque pro, quem dicant pro te. Facilis reprimique pro cu. Ullum delenit dignissim ius ea.Lorem ipsum dolor sit amet, dolore soleat cum te, sint equidem an sea. Nec vide nonumy tibique at, eum id porro periculis adolescens.Ea sed modo dictas eligendi. Aperiri dolores sit te, id sea eros molestie. Pri et latine percipit pertinax, ad duo tamquam nominati periculis. An duo hinc persecuti, ius scaevola mandamus ad. In nulla erroribus theophrastus quo, ne atqui mundi tritani nam, et sed agam efficiantur. Ei bonorum urbanitas cotidieque pro, quem dicant pro te. Facilis reprimique pro cu. Ullum delenit dignissim ius ea.Lorem ipsum dolor sit amet, dolore soleat cum te, sint equidem an sea. Nec vide nonumy tibique at, eum id porro periculis adolescens.Ea sed modo dictas eligendi. Aperiri dolores sit te, id sea eros molestie. Pri et latine percipit pertinax, ad duo tamquam nominati periculis. An duo hinc persecuti, ius scaevola mandamus ad. In nulla erroribus theophrastus quo, ne atqui mundi tritani nam, et sed agam efficiantur. Ei bonorum urbanitas cotidieque pro, quem dicant pro te. Facilis reprimique pro cu. Ullum delenit dignissim ius ea.Lorem ipsum dolor sit amet, dolore soleat cum te, sint equidem an sea. Nec vide nonumy tibique at, eum id porro periculis adolescens.Ea sed modo dictas eligendi. Aperiri dolores sit te, id sea eros molestie. Pri et latine percipit pertinax, ad duo tamquam nominati periculis. An duo hinc persecuti, ius scaevola mandamus ad. In nulla erroribus theophrastus quo, ne atqui mundi tritani nam, et sed agam efficiantur. Ei bonorum urbanitas cotidieque pro, quem dicant pro te. Facilis reprimique pro cu. Ullum delenit dignissim ius ea.",
    image: "./images/thumbnails/bread_tn.jpg",
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
    setRead({ ...placeholderStory, ...update });
    console.log("read is", read);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Container>
            <StoryContext.Provider value={stories}>
              <ReadContext.Provider value={read}>
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
                  path={["/", "/about", "/books", "/flashfiction", "/contact"]}
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
    </BrowserRouter>
  );
}

export default App;
