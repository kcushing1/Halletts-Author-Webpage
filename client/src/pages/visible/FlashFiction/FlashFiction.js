import React, { useContext } from "react";
import ReadContext from "../../../contexts/ReadContext";
import Carousel from "../../../components/Carousel/MyCarousel";
import ReadingBox from "../../../components/ReadingBox/ReadingBox";
import FadeDiv from "../../../utils/FadeInDown";

export default function FlashFiction() {
  const read = useContext(ReadContext);
  return (
    <FadeDiv>
      <div id="flashfiction">
        <Carousel />
        {read.isBeingRead ? <ReadingBox /> : <div></div>}
      </div>
    </FadeDiv>
  );
}
