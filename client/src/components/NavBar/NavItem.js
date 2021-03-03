import React from "react";
import "./navbar.css";

export default function ({ href, text }) {
  //a tag needs href for new page
  return (
    <>
      <li>
        <a className="nav-link navbar-text" href={href}>
          {text}
        </a>
      </li>
    </>
  );
}
