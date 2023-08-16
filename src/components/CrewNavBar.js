import React from "react";
import { NavLink } from "react-router-dom";

import NavItem from "./NavItem";

import "./DestinationNavBar.css";

function DestinationNavBar({ navSpec }) {
  const navItemDisplay = {
    showId: false,
    indicatorClass: "nav-item-indicator-bottom",
  };
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
                    <NavItem
                      item={item}
                      display={navItemDisplay}
                      isActive={isActive}
                    />
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
