import React, { useEffect, useState } from "react";
import "./admin.css";
import env from "react-dotenv";

export default function AdminHome() {
  let [catGif, setCatGif] = useState([]);
  function loadGiphy() {
    let giphyAPI = env.REACT_APP_GIPHY_KEY;
    let giphyURL =
      "https://api.giphy.com/v1/gifs/search?api_key=" +
      giphyAPI +
      "&q=cats&limit=3&offset=0&rating=g&lang=en";
    console.log("KEY IS: ", giphyAPI);
    let catgifs = fetch(giphyURL);
    catgifs
      .then((resp) => resp.json())
      .then((res) => {
        console.log("res is: ", res.data);
        setCatGif(res.data);
      });
  }

  useEffect(() => {
    loadGiphy();
  }, []);

  return (
    <div id="admin-home">
      <h1>WELCOME [USER]!</h1>
      <p className="greytext">this is admin home</p>
      <p>gifs might go here</p>
      {catGif.map((gif) => {
        return (
          <img alt={gif.title} key={gif.title} src={gif.images.original.url} />
        );
      })}
    </div>
  );
}
