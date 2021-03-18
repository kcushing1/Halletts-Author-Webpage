import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";
import FadeDiv from "../../utils/FadeInDown";
import "./admin.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState([]);
  const auth = useContext(AuthContext);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  //when user successfully logs in, redirect them to admin page
  //useEffect(() => {
  //  if (auth.isLoggedIn === true) {
  //setTimeout(() => {
  //  window.location.href = "/admin";
  //  }, 1500);
  //   }
  // }, [auth.isLoggedIn]);

  function handleLogin(e) {
    const loginData = {
      username: user.username,
      password: user.password,
    };

    //do nothing if there is no input
    if (!loginData.username || !loginData.password) return;

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
        auth.onAuth({ isLoggedIn: true });
      }
    });
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
      res.json();
      if (res.status === 200) {
        auth.onAuth({ isLoggedIn: true });
      }
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
          {auth.isLoggedIn ? (
            <button>
              <Link to="/admin">Go to Admin</Link>
            </button>
          ) : null}
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
