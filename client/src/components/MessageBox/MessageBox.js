import React from "react";
import "./messagebox.css";

export default function MessageBox({ name, email, text }) {
  return (
    <div className="greytext">
      <h3 id="message-name" className="my-2">
        {name}
      </h3>
      <h5>{email}</h5>
      <p>{text}</p>
    </div>
  );
}
