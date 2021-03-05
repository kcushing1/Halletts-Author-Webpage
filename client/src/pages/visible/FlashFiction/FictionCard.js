import React from "react";
import Image from "../../../utils/Image";

export default function FictionCard({ src, title, text }) {
  return (
    <div className="card m-3">
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <img src={src} alt={title} className="rounded card-image" />
        <p>{text}</p>
      </div>
    </div>
  );
}
