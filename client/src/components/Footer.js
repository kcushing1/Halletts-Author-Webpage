import React from "react";
import { Link } from "react-router-dom";
import "./Container/container.css";
import { IoLogInOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="outermost row">
      <div className="col text-left mx-2">
        <a
          href="https://portfolio-kcushing1.herokuapp.com/"
          target="_blank"
          className="greytext text-small"
        >
          <p>
            <small>Made with love by Kasey</small>
          </p>
        </a>
      </div>
      <div className="col text-right mx-2 text-dark">
        <Link to="/login">
          <IoLogInOutline style={{ color: "grey" }} />
        </Link>
      </div>
    </footer>
  );
}
