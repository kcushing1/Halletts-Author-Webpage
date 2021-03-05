import React, { useContext, useEffect, useState } from "react";
import StoryContext from "../../../contexts/StoryContext";

export default function FlashFiction() {
  const stories = useContext(StoryContext);

  return (
    <div>
      <p>flash fiction here</p>
      {stories.map((story) => {
        return (
          <div key={story.id}>
            <p>{story.title}</p>
            <p>{story.text}</p>
          </div>
        );
      })}
    </div>
  );
}
