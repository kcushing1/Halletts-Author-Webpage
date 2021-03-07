import React, { useEffect, useState } from "react";
import List from "../../components/List";
import PublishStory from "../../components/PublishStory";

export default function AdminFlashFiction() {
  const [stories, setStories] = useState([]);
  const [newStory, setNewStory] = useState([]);

  useEffect(() => {
    loadStories();
  }, []);

  function loadStories() {
    let stories = fetch("/api/flashfiction");
    stories
      .then((resp) => resp.json())
      .then((res) => {
        setStories(res);
      });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    console.log("name and value", name, value);
    setNewStory({ ...newStory, [name]: value });
  }

  function handlePostNewStory(e) {
    console.log("newpost");
    if (newStory.title && newStory.text) {
      const send = fetch("/api/flashfiction/create", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          ...newStory,
          image: "./images/thumbnails/bread2_tn.jpg",
        }),
      });
      send
        .then((resp) => resp.json())
        .then((res) => {
          console.log("res post flash", res);
        });
    }
  }

  return (
    <div className="row m-2">
      <div className="col-3 m-3">
        {stories.map((title) => {
          return (
            <List
              id={title.id}
              onClick={() => console.log("tbd")}
              item={title.title}
            />
          );
        })}
      </div>
      <div className="col">
        <p>textbox for new with publish</p>
        <PublishStory
          name="title"
          onChange={handleInputChange}
          btnClick={handlePostNewStory}
        />
      </div>
    </div>
  );
}
