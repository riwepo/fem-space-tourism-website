import React from "react";

function NavItem({ className, item, isActive }) {
  return (
    <p
      className={`${className} uppercase text-light fs-300 ff-sans-cond letter-spacing-2 ${
        isActive ? "underline-indicator-active" : undefined
      }`}
    >
      <span>{item.id}</span> {item.label}
    </p>
  );
}

export default NavItem;
