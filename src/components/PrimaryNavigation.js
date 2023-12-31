import React from "react";
import { NavLink } from "react-router-dom";

import "../css/utils/underline-indicator.css";
import "./PrimaryNavigation.css";

const navSpec = [
  { id: "00", label: "HOME", path: "/" },
  { id: "01", label: "DESTINATION", path: "/destination" },
  { id: "02", label: "CREW", path: "/crew" },
  { id: "03", label: "TECHNOLOGY", path: "/technology" },
];

function PrimaryNavigation({ isOpen }) {
  return (
    <nav className="primary-navigation" data-is-open={isOpen}>
      <ul className="flex">
        {navSpec.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className="ff-sans-cond letter-spacing-2 uppercase text-light underline-indicator"
              >
                <span aria-hidden="true">{item.id}</span>
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default PrimaryNavigation;
