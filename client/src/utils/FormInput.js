import React from "react";

export default function FormInput({ type, id, placeholder }) {
  return (
    <input
      type={type}
      className="form-control m-3 p-2"
      id={id}
      aria-describedby={id}
      placeholder={placeholder}
    ></input>
  );
}
