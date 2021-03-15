import React, { useContext, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SecuredRoute from "../../utils/SecuredRoute";
import AuthContext from "../../contexts/AuthContext";
import AdminNavbar from "../../components/NavBar/AdminNavbar";
import Login from "./Login";
import AdminHome from "./AdminHome";
import AdminFlashFiction from "./AdminFlashFiction";
import Messages from "./Messages";
import Home from "../visible/Home/Home";

export default function AdminAll() {
  const auth = useContext(AuthContext);

  return (
    <>
      <Route exact path="/admin">
        {auth.isLoggedIn === true ? <AdminHome /> : <Home />}
      </Route>
    </>
  );
}

{
  /* <SecuredRoute path="/admin">
<AdminHome />
</SecuredRoute>
<SecuredRoute path="/admin/flashfiction">
<AdminFlashFiction />
</SecuredRoute>
<SecuredRoute path="/admin/messages">
<Messages />
</SecuredRoute> */
}
