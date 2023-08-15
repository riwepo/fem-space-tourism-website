import React from "react";
import { NavLink } from "react-router-dom";

import NavItem from "./NavItem";

import "./DestinationNavBar.css";

function DestinationNavBar({ navSpec }) {
  return (
    <nav className="destination-navbar">
      <ul>
        {navSpec.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                className="nav-link"
                to={item.path}
                children={({ isActive }) => {
                  return (
                    <NavItem item={item} showId={false} isActive={isActive} />
                  );
                }}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default DestinationNavBar;
