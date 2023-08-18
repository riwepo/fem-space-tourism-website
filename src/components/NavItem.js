import React from "react";

import "../css/utils/nav-item-indicator.css";
import "./NavItem.css";

function NavItem({ item, display, isActive }) {
  const className = `uppercase text-light fs-300 ff-sans-cond letter-spacing-2 nav-item nav-item-indicator ${
    display.indicatorClass
  }
   ${isActive ? "nav-item-indicator--active" : undefined}`;
  if (display.showId)
    return (
      <p className={className}>
        <span>{item.id}</span> {item.label}
      </p>
    );
  return <p className={className}>{item.label}</p>;
}

export default NavItem;
