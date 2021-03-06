import React from "react";
import "./navbar.css";
import NavItem from "./NavItem";

export default function VisibleNavbar() {
  return (
    <nav className="navbar navbar-expand-md border-bottom mx-3">
      <a className="navbar-brand nav-hallett" href="/">
        HALLETT
      </a>

      <button
        className="navbar-toggler navbar-light greytext border"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon "></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end mr-6"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <NavItem text="HOME" href="/" />
          <NavItem text="ABOUT" href="about" />
          <NavItem text="BOOKS" href="books" />
          <NavItem text="FLASH FICTION" href="flashfiction" />
          <NavItem text="CONTACT" href="contact" />
        </ul>
      </div>
    </nav>
  );
}
