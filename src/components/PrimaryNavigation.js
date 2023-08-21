import React from "react";
import { NavLink } from "react-router-dom";

import "../css/utils/underline-indicators.css";
import "./PrimaryNavigation.css";

function PrimaryNavigation() {
  return (
    <nav>
      <ul className="primary-navigation flex underline-indicators">
        <li className="active">
          <NavLink
            to="/"
            className="ff-sans-cond letter-spacing-2 uppercase text-light"
          >
            <span>00</span>Home
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/destination"
            className="ff-sans-cond letter-spacing-2 uppercase text-light"
          >
            <span>01</span>Destination
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/crew"
            className="ff-sans-cond letter-spacing-2 uppercase text-light"
          >
            <span>02</span>Crew
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/technology"
            className="ff-sans-cond letter-spacing-2 uppercase text-light"
          >
            <span>03</span>Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PrimaryNavigation;
