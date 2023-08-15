import React from "react";

import "./NavItem.css";
import "../shared_css/underliner.css";

function NavItem({ item, showId, isActive }) {
  const className = `uppercase text-light fs-300 ff-sans-cond letter-spacing-2 nav-item indicator
   ${isActive ? "indicator--active" : undefined}`;
  if (showId)
    return (
      <p className={className}>
        <span>{item.id}</span> {item.label}
      </p>
    );
  return <p className={className}>{item.label}</p>;
}

export default NavItem;
