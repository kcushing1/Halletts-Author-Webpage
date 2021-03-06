import React, { useContext, useEffect, useState } from "react";
import StoryContext from "../../../contexts/StoryContext";
import FictionCard from "../../../components/FictionCard";
import Carousel from "../../../components/Carousel/MyCarousel";
import ReadingBox from "../../../components/ReadingBox/ReadingBox";

export default function FlashFiction() {
  return (
    <div id="flashfiction">
      <Carousel />
      <ReadingBox />
    </div>
  );
}
