import React from "react";

export default function List({ item, onClick, id }) {
  return (
    <>
      <button
        className="list-group-item list-group-item-action rounded"
        onClick={onClick}
        id={id}
      >
        {item}
      </button>
    </>
  );
}
