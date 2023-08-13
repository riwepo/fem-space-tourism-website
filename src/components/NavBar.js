import React from "react";
import { NavLink } from "react-router-dom";

import NavItem from "./NavItem";

import classes from "./NavBar.module.css";

const navSpec = [
  { id: "00", label: "HOME", path: "/" },
  { id: "01", label: "DESTINATION", path: "/destination" },
  { id: "02", label: "CREW", path: "/crew" },
  { id: "03", label: "TECHNOLOGY", path: "/technology" },
];

function NavBar({ className, isOpen }) {
  return (
    <nav
      className={`${className} ${classes.nav} ${
        isOpen ? classes.navOpen : undefined
      }`}
    >
      <ul className={classes.navList}>
        {navSpec.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                className={classes.navLink}
                to={item.path}
                children={({ isActive }) => {
                  return <NavItem item={item} isActive={isActive} />;
                }}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
