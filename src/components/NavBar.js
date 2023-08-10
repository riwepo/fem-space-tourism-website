import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavBar.module.css";

function NavBar({ className, isOpen }) {
  return (
    <nav
      className={`${className} ${classes.nav} ${
        isOpen ? classes.navOpen : undefined
      }`}
    >
      <ul className={classes.list}>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? `${classes.navLink} ${classes.navLinkActive}`
                : classes.navLink;
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? `${classes.navLink} ${classes.navLinkActive}`
                : classes.navLink;
            }}
            to="/destination"
          >
            Destination
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? `${classes.navLink} ${classes.navLinkActive}`
                : classes.navLink;
            }}
            to="/crew"
          >
            Crew
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? `${classes.navLink} ${classes.navLinkActive}`
                : classes.navLink;
            }}
            to="/technology"
          >
            Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
