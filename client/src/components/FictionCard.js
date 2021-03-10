import React, { useContext } from "react";
import Image from "../utils/Image";
import ReadContext from "../contexts/ReadContext";

export default function FictionCard({ src, title, id }) {
  const readStory = useContext(ReadContext);

  function handleUpdateRead(id) {
    console.log("read story id: ", id);
    const read = fetch("/api/flashfiction/" + id);
    read
      .then((resp) => resp.json())
      .then((res) => {
        console.log("the GET id res: ", res);
        readStory.update({ ...readStory, ...res });
      });
  }

  return (
    <div
      id={id}
      className="card m-3"
      style={{ width: "15em", height: "15em" }}
      onClick={() => handleUpdateRead(id)}
    >
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <img src={src} alt={title} className="rounded card-image" />
      </div>
    </div>
  );
}
