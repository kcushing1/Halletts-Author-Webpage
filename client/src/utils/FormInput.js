import React from "react";

export default function FormInput({ type, id, placeholder, name, onChange }) {
  return (
    <input
      type={type}
      className="form-control m-3 p-2"
      id={id}
      aria-describedby={id}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    ></input>
  );
}
