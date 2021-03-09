import React from "react";
import Col from "../../utils/Col";
import FormInput from "../../utils/FormInput";
import Row from "../../utils/Row";
import "./admin.css";

//https://bootsnipp.com/snippets/dldxB
//just like this one

export default function Login() {
  function handleInputChange(e) {
    console.log("input change");
  }

  return (
    <div id="form-content">
      <div className="fadeIn first">
        <h4>Log In</h4>
      </div>
      <form>
        <input
          type="text"
          id="login"
          class="fadeIn second"
          name="login"
          placeholder="login"
        ></input>
        <input
          type="text"
          id="password"
          class="fadeIn third"
          name="login"
          placeholder="password"
        ></input>
        <button type="button" className="btn btn-primary">
          Log In
        </button>
      </form>
      <div id="formFooter">
        <a class="underlineHover" href="#">
          Back to Main Site
        </a>
      </div>
    </div>
  );
}
