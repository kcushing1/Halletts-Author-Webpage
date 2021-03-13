import React from "react";
import FadeDiv from "../../../utils/FadeInDown";

export default function HomeGalleryImg() {
  return (
    <FadeDiv>
      <div className="col m-1 rounded">
        <img src="/images/thumbnails/flowers_tn.jpg" alt="gallery image" />
      </div>
    </FadeDiv>
  );
}
