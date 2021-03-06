import React from "react";

const StoryContext = React.createContext({
  id: Number,
  title: "",
  image: "",
  text: "",
  update: () => {},
});

export default StoryContext;
