import React, { useState } from "react";
import Col from "../../utils/Col";
import FormInput from "../../utils/FormInput";
import Row from "../../utils/Row";
import "./admin.css";

export default function Login() {
  const [user, setUser] = useState([]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleLogin(e) {
    console.log("log in, suckers");
    const loginData = {
      username: user.username,
      password: user.password,
    };
    //do nothing if there is no input
    if (!loginData.username || !loginData.password) return;

    let allowUser = fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
    });

    allowUser
      .then((resp) => {
        resp.json();
        console.log("after fetch login");
      })
      .then((user) => console.log("in the clear", user));
  }
  function handleCreateUser(e) {
    console.log("create user ftn");
    const loginData = {
      username: user.username,
      password: user.password,
    };
    console.log(loginData);
    if (!loginData.username || !loginData.password) return;

    const newUser = fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    newUser
      //.then((resp) => resp.json())
      .then((res) => (window.location.href = "/admin"));
  }

  return (
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
          className="btn border greytext mx-2"
          onClick={handleLogin}
        >
          Log in
        </button>
        <button
          type="button"
          className="btn border greytext mx-2"
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
  );
}
