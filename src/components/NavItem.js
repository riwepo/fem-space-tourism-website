import React from "react";

import classes from "./NavItem.module.css";

function NavItem({ item, isActive }) {
  return (
    <div className={`${classes.container}`}>
      {/* <p
        className={`uppercase text-light fs-300 ff-sans-cond letter-spacing-2`}
      >
        {item.id}
      </p> */}
      <p
        className={`uppercase text-light fs-300 ff-sans-cond letter-spacing-2`}
      >
        <span>{item.id}</span> {item.label}
      </p>
      <div
        className={`bg-light ${classes.indicator} ${
          isActive ? classes.indicatorActive : undefined
        }`}
      ></div>
    </div>
  );
}

export default NavItem;
