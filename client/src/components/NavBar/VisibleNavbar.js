import React from "react";
import NavItem from "./NavItem";

export default function VisibleNavbar() {
  //Hallett Sargent as a-tag to home page</p>
  //toggle button hamburger</p>
  //navlinks with href/reroute and text props
  return (
    <nav className="row navbar sticky-top navbar-expand-lg outermost border-bottom">
      <a className="navbar-brand" href="#page-top">
        Hallett Sargent
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
          <NavItem text="Home" href="#" />
          <NavItem text="About" href="#" />
          <NavItem text="Books" href="#" />
          <NavItem text="Flash Fiction" href="#" />
          <NavItem text="Contact" href="#" />
        </ul>
      </div>
    </nav>
  );
}
