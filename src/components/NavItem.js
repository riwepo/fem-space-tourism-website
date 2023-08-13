import React from "react";

import classes from "./NavItem.module.css";
import underlinerClasses from "../shared_css/underliner.module.css";

function NavItem({ item, isActive }) {
  return (
    <p
      className={`uppercase text-light fs-300 ff-sans-cond letter-spacing-2 ${
        classes.navItem
      } ${underlinerClasses.indicator} ${
        isActive ? underlinerClasses.indicatorActive : undefined
      }`}
    >
      <span>{item.id}</span> {item.label}
    </p>
  );
}

export default NavItem;
