import React from "react";
import "./container.css";

export default function Container({ children }) {
  return (
    <div className="container-fluid outermost p-4">
      <div className="mx-3 mt-3">
        <div className="mainbox">{children}</div>
      </div>
    </div>
  );
}
