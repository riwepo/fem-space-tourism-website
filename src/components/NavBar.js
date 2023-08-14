import React from "react";
import { NavLink } from "react-router-dom";

import NavItem from "./NavItem";

// import classes from "./NavBar.module.css";

function NavBar({ className, classes, navSpec, isOpen }) {
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
