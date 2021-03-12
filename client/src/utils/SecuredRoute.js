import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default function SecuredRoute({ path, children }) {
  // const auth = {
  //   isLoggedIn: false,
  //   onAuth() {
  //     this.isLoggedIn = true;
  //   },
  //   getAuthStatus() {
  //     return this.isLoggedIn;
  //   },
  // };
  const auth = useContext(AuthContext);
  //const [auth, setAuth] = setState({
  //  isLoggedIn: false
  // })

  return (
    <Route
      path={path}
      render={() => (auth.isLoggedIn ? { children } : <Redirect to="/" />)}
    ></Route>
  );
}

//with help from: kudvenkat
//youtube: https://www.youtube.com/watch?v=-UUkjwGBg7w
