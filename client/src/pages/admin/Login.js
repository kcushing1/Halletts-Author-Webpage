import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";
import FadeDiv from "../../utils/FadeInDown";
import "./admin.css";
//import { browserHistory } from "react-router";
import { Route } from "react-router-dom";
import AdminStory from "../../components/AdminStory";
import Home from "../visible/Home/Home";
import AdminHome from "./AdminHome";

export default function Login() {
  const [user, setUser] = useState([]);
  const auth = useContext(AuthContext);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  //when user successfully logs in, redirect them to admin page
  useEffect(() => {
    console.log("auth changes", auth);
    if (auth.isLoggedIn === true) {
      // setTimeout(() => {
      window.location.href = "/login";
      // }, 3000);
    }
  }, [auth.isLoggedIn]);

  function handleLogin(e) {
    const loginData = {
      username: user.username,
      password: user.password,
    };

    //do nothing if there is no input
    if (!loginData.username || !loginData.password) return;
    console.log("pre fetch auth", auth);

    let allowUser = fetch("/api/auth/authcook", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    allowUser.then((resp) => {
      resp.json();

      if (resp.status === 200) {
        //change state to isLoggedIn:true to allow access to SecuredRoutes admin pages
        auth.onAuth({ isLoggedIn: true });
      }
    });
    // .then((res) => console.log("is logged in"));
  }
  function handleCreateUser(e) {
    const loginData = {
      username: user.username,
      password: user.password,
    };

    //if no input, do nothing
    if (!loginData.username || !loginData.password) return;

    const newUser = fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    newUser.then((res) => {
      auth.onAuth({ isLoggedIn: true });
    });
  }

  return (
    <FadeDiv>
      <div className="p-5">
        <form className="mx-5">
          <h2 className="text-center">Log in</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required="required"
              name="username"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <button
            type="button"
            className="btn border admin-btn mx-2"
            onClick={handleLogin}
          >
            Log in
          </button>
          <button
            type="button"
            className="btn border admin-btn mx-2"
            onClick={handleCreateUser}
          >
            Sign Up
          </button>
        </form>
        <div id="formFooter" className="m-3">
          <a className="greytext" href="/">
            Not an admininistrator? Back to Main Site
          </a>
        </div>
      </div>
    </FadeDiv>
  );
}
