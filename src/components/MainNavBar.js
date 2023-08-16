import React from "react";
import { NavLink } from "react-router-dom";

import NavItem from "./NavItem";

import "./MainNavBar.css";

function MainNavBar({ navSpec, isOpen }) {
  const navItemDisplay = {
    showId: true,
    indicatorClass: "nav-item-indicator-reactive",
  };
  return (
    <nav className={`main-navbar ${isOpen ? "main-navbar--open" : undefined}`}>
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

export default MainNavBar;
