import React, { Component, useContext } from "react";

import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import "./carousel.css";
import FictionCard from "../FictionCard";
import StoryContext from "../../contexts/StoryContext";

export default function MyCarousel() {
  const stories = useContext(StoryContext);

  return (
    <Carousel focusOnSelect={true} itemsToShow={3}>
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
  );
  // }
}
