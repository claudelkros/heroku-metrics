import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/navlinks.scss";

export default function NavLinks() {
  return (
    <div className="navlinks">
      <NavLink to="/dashboard" activeClassName="selected">
        Home
      </NavLink>
      <NavLink to="/manage" activeClassName="selected">
        Manage
      </NavLink>
      <NavLink to="/about" activeClassName="selected">
        About
      </NavLink>
    </div>
  );
}
