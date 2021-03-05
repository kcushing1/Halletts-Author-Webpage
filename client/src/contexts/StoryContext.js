import React from "react";

const StoryContext = React.createContext({
  id: Number,
  title: "",
  image: "",
  createdAt: "description",
  updatedAt: "github",
});

export default StoryContext;
