import React, { useContext } from "react";
import "./readingbox.css";
import ReadContext from "../../contexts/ReadContext";

export default function ReadingBox() {
  const read = useContext(ReadContext);
  console.log("read Context is: ", read);
  return (
    <div id="readingbox">
      <h3>{read.title}</h3>
      <img alt={read.title} src={read.image} />
      <p>{read.text}</p>
    </div>
  );
}
