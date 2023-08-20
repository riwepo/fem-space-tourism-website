import React from "react";

import "../css/utils/underline-indicators.css";
import "./PrimaryNavigation.css";

function PrimaryNavigation() {
  return (
    <nav>
      <ul className="primary-navigation flex underline-indicators">
        <li className="active">
          <a className="letter-spacing-2 upper-case text-light" href="#">
            <span>0</span>Active
          </a>
        </li>
        <li>
          <a className="letter-spacing-2 upper-case text-light" href="#">
            <span>1</span>Hovered
          </a>
        </li>
        <li>
          <a className="letter-spacing-2 upper-case text-light" href="#">
            <span>2</span>Idle
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default PrimaryNavigation;
