import React from "react";

const StoryContext = React.createContext({
  id: Number,
  title: "",
  text: "",
  image: "",
  createdAt: "",
  updatedAt: "",
});

export default StoryContext;
