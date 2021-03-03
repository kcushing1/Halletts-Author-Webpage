import React from "react";

export default function ({ href, text }) {
  //a tag needs href for new page
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href={href}>
          {text}
        </a>
      </li>
    </>
  );
}
