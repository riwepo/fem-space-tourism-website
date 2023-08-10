import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavItem.module.css";

function NavItem({ className, item }) {
  return (
    <li>
      <div className={classes.container}>
        <p className={classes.id}>{item.id}</p>
        <NavLink
          className={({ isActive }) => {
            return isActive
              ? `${classes.navLink} ${classes.navLinkActive}`
              : classes.navLink;
          }}
          to={item.path}
        >
          {item.label}
        </NavLink>
        <div className={classes.activeIndicator}></div>
      </div>
    </li>
  );
}

export default NavItem;
