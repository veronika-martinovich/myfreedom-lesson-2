import React from "react";
import { NavbarButton } from "./navbar-button";
import { Nav } from "./nav";

export const Navbar = () => (
  <nav
    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
    id="ftco-navbar"
  >
    <div className="container">
      <a className="navbar-brand" href="index.html">
        Vegefoods
      </a>
      <NavbarButton />

      <div className="collapse navbar-collapse" id="ftco-nav">
        <Nav />
      </div>
    </div>
  </nav>
);
