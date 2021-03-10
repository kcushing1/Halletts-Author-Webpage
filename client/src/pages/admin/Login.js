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
      <form className="mx-5">
        <FormInput
          type="text"
          id="username"
          placeholder="Username"
          onChange={handleInputChange}
        />
        <button type="button" className="btn btn-primary">
          Log In
        </button>
      </form>
      <div id="formFooter">
        <a class="greytext" href="/">
          Back to Main Site
        </a>
      </div>
    </div>
  );
}
