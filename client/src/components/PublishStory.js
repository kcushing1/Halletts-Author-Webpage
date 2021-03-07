import React from "react";
import FormInput from "../utils/FormInput";

export default function PublishStory({ name, onChange, btnClick }) {
  return (
    <div className="mx-4">
      <FormInput
        input="text"
        name={name}
        placeholder={name}
        onChange={onChange}
      />
      <textarea
        id="message"
        className="form-control m-3 p-2"
        placeholder="Your Story Here"
        name="text"
        onChange={onChange}
        rows="10"
      ></textarea>
      <button type="button" className="btn border" onClick={btnClick}>
        Publish
      </button>
    </div>
  );
}
