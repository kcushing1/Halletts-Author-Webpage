import React from "react";

const AuthContext = React.createContext({
  //isLoggedIn: false,
  // onAuth: () => {
  //   isLoggedIn = true;
  // },
  // getAuthStatus: () => {
  //   return isLoggedIn;
  // },
  //onAuth: () => {}
  isLoggedIn: Boolean,
  onAuth: () => {},
});

export default AuthContext;
