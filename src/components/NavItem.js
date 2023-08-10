import React from "react";

import classes from "./NavItem.module.css";

function NavItem({ item, isActive }) {
  console.log(item, isActive);
  return (
    <div className={classes.container}>
      <p className={classes.id}>{item.id}</p>
      <p className={classes.label}>{item.label}</p>
      <div
        className={`${classes.indicator} ${
          isActive ? classes.indicatorActive : undefined
        }`}
      ></div>
    </div>
  );
}

export default NavItem;
