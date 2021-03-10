import React, { useContext } from "react";
import Carousel from "react-elastic-carousel";
import "./carousel.css";
import FictionCard from "../FictionCard";
import StoryContext from "../../contexts/StoryContext";

export default function MyCarousel() {
  const stories = useContext(StoryContext);

  return (
    <Carousel itemsToShow={3}>
      {stories.map((story) => {
        return (
          <FictionCard
            id={story.id}
            key={story.id}
            title={story.title}
            src={story.image}
          />
        );
      })}
    </Carousel>
  );
  // }
}
