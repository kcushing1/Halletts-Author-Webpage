import React, { useContext, useEffect, useState } from "react";
import StoryContext from "../../../contexts/StoryContext";
import FictionCard from "../../../components/FictionCard";
import Carousel from "../../../components/Carousel/MyCarousel";

export default function FlashFiction() {
  return (
    <div id="flashfiction">
      <p>flash fiction here</p>
      <Carousel />
    </div>
  );
}
