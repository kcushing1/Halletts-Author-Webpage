import React, { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import Col from "../../utils/Col";
import FadeDiv from "../../utils/FadeInDown";
import FormInput from "../../utils/FormInput";
import Row from "../../utils/Row";
import "./admin.css";

export default function Login() {
  const [user, setUser] = useState([]);
  const auth = useContext(AuthContext);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleLogin(e) {
    //function handleLoginTest(e) {
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

    allowUser
      .then((resp) => {
        resp.json();
        console.log("resp is", resp);
        //console.log(resp.text());
        // console.log(resp.User);
        //console.log("after fetch login");
        if (resp.status === 200) {
          console.log("woohoo");
          auth.onAuth({ isLoggedIn: true });
          // console.log("post fetch if auth", auth);
        } else {
          console.log("uh oh, something went wrong");
        }
        //console.log("post fetch auth", auth);
      })
      .then(() => console.log(".thn auth", auth));
    // .then((user) => {
    //   if (user) {
    //     console.log(".then user");
    //   }
    //   if (!user) {
    //     console.log("no .then user");
    //   } else {
    //     console.log(".then third option?");
    //   }
    // if (user.data) {
    //   console.log("successful login");
    // } else {
    //console.log("ugh, screw this login");
    //}
    // auth.onAuth();
    // console.log(auth.onAuth);
    //console.log(auth.isLoggedIn);
    //window.location.href = "/admin";
    //});
  }
  function handleCreateUser(e) {
    console.log("create user ftn");
    const loginData = {
      username: user.username,
      password: user.password,
    };
    if (!loginData.username || !loginData.password) return;

    const newUser = fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    newUser.then((res) => (window.location.href = "/admin"));
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
