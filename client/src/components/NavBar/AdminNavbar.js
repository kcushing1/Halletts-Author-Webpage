import React, { useContext } from "react";
import "./navbar.css";
import NavItem from "./NavItem";
import AuthContext from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function AdminNavbar() {
  const auth = useContext(AuthContext);

  function handleLogOut(e) {
    //setTimeout(() => {
    auth.onAuth({ isLoggedIn: false });
    //}, 5000);
  }

  return (
    <nav className="row navbar navbar-expand-lg border-bottom mx-3">
      <Link className="navbar-brand nav-hallett" to="/admin">
        HALLETT
      </Link>

      <button
        className="navbar-toggler navbar-light greytext border"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end mr-6"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <NavItem text="HOME" href="/admin" />
          <NavItem text="FLASH FICTION" href="/admin-flashfiction" />
          <NavItem text="MESSAGES" href="/admin-messages" />
          <NavItem text="RETURN TO MAIN" href="/" />
          <NavItem text="LOG OUT" href="/" onClick={handleLogOut} />
        </ul>
      </div>
    </nav>
  );
}
