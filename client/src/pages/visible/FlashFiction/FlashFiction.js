import React, { useContext, useEffect, useState } from "react";
import StoryContext from "../../../contexts/StoryContext";
import FictionCard from "./FictionCard";

export default function FlashFiction() {
  const stories = useContext(StoryContext);

  return (
    <div id="flashfiction">
      <p>flash fiction here</p>
      {stories.map((story) => {
        return (
          <FictionCard
            key={story.id}
            title={story.title}
            text={story.text}
            src={story.image}
          />
        );
      })}
    </div>
  );
}
