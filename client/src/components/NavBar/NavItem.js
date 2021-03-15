import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function ({ href, text }) {
  //a tag needs href for new page
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link navbar-text nav-lines" to={href}>
          {text}
        </Link>
      </li>
    </>
  );
}
