import React from "react";
import { Outlet } from "react-router-dom";

import DestinationNavigation from "../components/DestinationNavigation";

import "../shared_css/centered-grid.css";
import "../shared_css/background.css";
import "./DestinationLayout.css";

function DestinationLayout() {
  return (
    <>
      <div className="background background--destination"></div>
      <div className="destination-layout centered-grid">
        <h1 className="ff-sans-con fs-500 upper-case letter-spacing-1 centered-grid-c23">
          <span aria-hidden="true">01</span> Pick your destination
        </h1>
        <DestinationNavigation className="navigation" />
        <article className="article centered-grid-c23">
          <Outlet />
        </article>
      </div>
    </>
  );
}

export default DestinationLayout;
