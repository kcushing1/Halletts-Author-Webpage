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
          className="btn border greytext"
          onClick={handleLogin}
        >
          Log in
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
