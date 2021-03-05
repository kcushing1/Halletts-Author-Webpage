import React from "react";
import "./navbar.css";
import NavItem from "./NavItem";

export default function VisibleNavbar() {
  //Hallett Sargent as a-tag to home page</p>
  //toggle button hamburger</p>
  //navlinks with href/reroute and text props
  return (
    <nav className="row navbar navbar-expand-lg border-bottom mx-3">
      <a className="navbar-brand nav-hallett" href="#page-top">
        HALLETT
      </a>

      <button
        className="navbar-toggler"
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
          <NavItem text="HOME" href="#" />
          <NavItem text="ABOUT" href="#" />
          <NavItem text="BOOKS" href="#" />
          <NavItem text="FLASH FICTION" href="#" />
          <NavItem text="CONTACT" href="#" />
        </ul>
      </div>
    </nav>
  );
}
