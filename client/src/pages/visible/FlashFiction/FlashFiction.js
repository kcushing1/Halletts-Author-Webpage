import React, { useEffect, useState } from "react";

export default function FlashFiction() {
  const [stories, setStories] = useState([]);

  function loadStories() {
    console.log("loadStories ftn");
    const stories = fetch("/api/flashfiction/");
    stories
      .then((resp) => resp.json())
      .then((res) => {
        console.log("res is: ", res);
        setStories(res);
        // res.map((story) => {
        //   return (
        //     <div key={story.id}>
        //       <p>{story.title}</p>
        //       <p>{story.text}</p>
        //     </div>
        //   );
        // });
      })
      .catch((err) => console.log("error is: ", err));
  }

  useEffect(() => {
    loadStories();
  }, []);

  return (
    <div>
      <p>flash fiction here</p>
      {stories.map((story) => {
        return (
          <>
            <p>{story.title}</p>
            <p>{story.text}</p>
          </>
        );
      })}
    </div>
  );
}
