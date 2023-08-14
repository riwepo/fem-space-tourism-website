import React from "react";

import classes from "./NavItem.module.css";
import underlinerClasses from "../shared_css/underliner.module.css";

function NavItem({ item, showId, isActive }) {
  const className = `uppercase text-light fs-300 ff-sans-cond letter-spacing-2 ${
    classes.navItem
  } ${underlinerClasses.indicator} ${
    isActive ? underlinerClasses.indicatorActive : undefined
  }`;
  if (showId)
    return (
      <p className={className}>
        <span>{item.id}</span> {item.label}
      </p>
    );
  return <p className={className}>{item.label}</p>;
}

export default NavItem;
