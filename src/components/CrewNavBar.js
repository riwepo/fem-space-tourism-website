import React from "react";
import { NavLink } from "react-router-dom";

import "./CrewNavBar.css";

function CrewNavBar({ className, navSpec }) {
  return (
    <nav className={`${className} crew-navbar`}>
      <ul>
        {navSpec.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                className="nav-link"
                to={item.path}
                children={({ isActive }) => {
                  return (
                    <div
                      className={`dot ${isActive ? "dot--active" : undefined}`}
                    ></div>
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

export default CrewNavBar;
