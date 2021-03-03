import React, { useEffect } from "react";

export default function FlashFiction() {
  function loadStories() {
    console.log("loadStories ftn");
    const stories = fetch("/api/flashfiction", {
      credentials: true,
    });
    stories
      .then((resp) => resp.text())
      .then((res) => console.log(res))
      .catch((err) => console.log("error is: ", err));
  }

  useEffect(() => {
    loadStories();
  }, []);

  return (
    <div>
      <p>flash fiction here</p>
    </div>
  );
}
