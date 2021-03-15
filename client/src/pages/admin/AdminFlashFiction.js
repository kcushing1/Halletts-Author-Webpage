import React, { useEffect, useState } from "react";
import AdminStory from "../../components/AdminStory";
import List from "../../components/List";
import PublishStory from "../../components/PublishStory";

export default function AdminFlashFiction() {
  const [stories, setStories] = useState([]);
  const [newStory, setNewStory] = useState([]);
  const [viewStory, setViewStory] = useState({ view: false });

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
    setNewStory({ ...newStory, [name]: value });
  }

  function handlePostNewStory(e) {
    //randomly select an image from ten options
    let num = Math.floor(Math.random() * 10).toString();
    let imgString = "./images/thumbnails/gree" + num + "_tn.jpg";
    const sendBody = JSON.stringify({
      title: newStory.title,
      text: newStory.text,
      image: imgString,
    });

    if (newStory.title && newStory.text) {
      const send = fetch("/api/flashfiction/create", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: sendBody,
      });
      send.then((res) => {
        console.log("Flash Fiction story created!");
      });
    }
  }

  function handleReviewStory(e) {
    console.log(e.target.id);
    let review = fetch("/api/flashfiction/" + e.target.id);
    review
      .then((resp) => resp.json())
      .then((res) => {
        setViewStory({ ...res, view: true });
      });
  }

  return (
    <div className="row m-2">
      <div className="col-3 m-3">
        {stories.map((title) => {
          return (
            <List
              id={title.id}
              key={title.id}
              onClick={handleReviewStory}
              item={title.title}
            />
          );
        })}
      </div>
      <div className="col">
        {viewStory.view ? (
          <AdminStory title={viewStory.title} text={viewStory.text} />
        ) : (
          <PublishStory
            name="title"
            onChange={handleInputChange}
            btnClick={handlePostNewStory}
          />
        )}
      </div>
    </div>
  );
}
