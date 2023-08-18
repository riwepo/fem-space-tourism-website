import React from "react";
import { Outlet } from "react-router-dom";

import DestinationNavigation from "../components/DestinationNavigation";

import "../css/utils/centered-grid.css";
import "../css/utils/background.css";
import "./DestinationLayout.css";

function DestinationLayout() {
  return (
    <>
      <div className="background background--destination"></div>
      <div className="destination-layout centered-grid">
        <DestinationNavigation className="navigation" />
        <article className="article centered-grid-c23">
          <Outlet />
        </article>
      </div>
    </>
  );
}

export default DestinationLayout;
