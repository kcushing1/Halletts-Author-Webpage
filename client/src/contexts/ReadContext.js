import React from "react";

const ReadContext = React.createContext({
  id: Number,
  title: "",
  image: "",
  text: "",
  update: () => {},
});

export default ReadContext;
