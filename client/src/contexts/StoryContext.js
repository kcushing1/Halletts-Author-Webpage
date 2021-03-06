import React from "react";

const StoryContext = React.createContext({
  id: Number,
  title: "",
  image: "",
  createdAt: "",
  updatedAt: "",
});

export default StoryContext;
