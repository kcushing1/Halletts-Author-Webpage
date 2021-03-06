import React, { useContext, useEffect, useState } from "react";
import StoryContext from "../../../contexts/StoryContext";
import FictionCard from "../../../components/FictionCard";
import Carousel from "../../../components/Carousel/MyCarousel";

export default function FlashFiction() {
  const stories = useContext(StoryContext);

  return (
    <div id="flashfiction">
      <p>flash fiction here</p>
      <Carousel>
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
      </Carousel>
    </div>
  );
}
