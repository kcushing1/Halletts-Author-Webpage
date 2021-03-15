import React from "react";
import FadeDiv from "../../../utils/FadeInDown";

export default function HomeGalleryImg({ num }) {
  const imgUrl = "/images/gallery/instapic" + num + "forkc_tn.jpg";
  return (
    <FadeDiv>
      <div className="col m-1 rounded">
        <img src={imgUrl} alt="gallery" />
      </div>
    </FadeDiv>
  );
}
