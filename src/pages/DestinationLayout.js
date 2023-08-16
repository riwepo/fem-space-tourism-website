import React from "react";
import { Outlet } from "react-router-dom";

import DestinationNavigation from "../components/DestinationNavigation";

import "./DestinationLayout.css";
import "../shared_css/centered-grid.css";
import "../shared_css/background.css";

function DestinationLayout() {
  return (
    <>
      <div className="background background--destination"></div>
      <div className="destination-layout centered-grid">
        <h1 className="ff-sans-con fs-500 upper-case letter-spacing-1 centered-grid-c23">
          <span>01</span> Pick your destination
        </h1>
        <DestinationNavigation className="navigation" />
        <section className="section">
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default DestinationLayout;
