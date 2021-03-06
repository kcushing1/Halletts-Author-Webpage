import React, { Component, useContext } from "react";
import "./carousel.css";
import Carousel from "react-elastic-carousel";
import FictionCard from "../FictionCard";
import StoryContext from "../../contexts/StoryContext";

export default function MyCarousel() {
  //class App extends Component
  // state = {
  //   items: [
  //     { id: 1, title: "item #1" },
  //     { id: 2, title: "item #2" },
  //     { id: 3, title: "item #3" },
  //     { id: 4, title: "item #4" },
  //     { id: 5, title: "item #5" },
  //   ],
  // };
  const stories = useContext(StoryContext);

  // render() {
  //const { items } = this.state;
  return (
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
  );
  // }
}
