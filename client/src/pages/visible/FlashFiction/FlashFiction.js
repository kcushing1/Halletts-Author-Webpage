import React, { useContext, useEffect, useState } from "react";
import ReadContext from "../../../contexts/ReadContext";
import Carousel from "../../../components/Carousel/MyCarousel";
import ReadingBox from "../../../components/ReadingBox/ReadingBox";

export default function FlashFiction() {
  const read = useContext(ReadContext);
  return (
    <div id="flashfiction">
      <Carousel />
      {read.isBeingRead ? <ReadingBox /> : <div></div>}
    </div>
  );
}
