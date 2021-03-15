import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import Home from "../pages/visible/Home/Home";

export default function SecuredRoute({ children, path }) {
  const auth = useContext(AuthContext);
  useEffect(() => {
    console.log(auth, "auth changes secured");
  }, [auth.isLoggedIn]);

  return (
    <>
      {auth.isLoggedIn === true ? (
        <Route exact path={path}>
          {children}
        </Route>
      ) : (
        <Route exact path="/">
          <Home />
        </Route>
      )}
    </>
  );
}

//with help from: kudvenkat
//youtube: https://www.youtube.com/watch?v=-UUkjwGBg7w
