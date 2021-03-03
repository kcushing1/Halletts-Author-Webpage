import React from "react";
import "./container.css";

export default function Container({ children }) {
  return (
    <div className="container-fluid outermost p-4">
      <div className="mainbox mx-3">{children}</div>
    </div>
  );
}