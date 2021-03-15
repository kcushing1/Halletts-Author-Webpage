import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: Boolean,
  onAuth: () => {},
});

export default AuthContext;
