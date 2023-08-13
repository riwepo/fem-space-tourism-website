import React from "react";
import { Outlet } from "react-router-dom";

import DestinationNavigation from "../components/destination/DestinationNavigation";

import classes from "./DestinationLayout.module.css";
import centeredGrid from "../shared_css/centered-grid.module.css";

function DestinationLayout() {
  return (
    <div className={`${centeredGrid.grid} ${classes.container}`}>
      <header className={classes.header}>01 Pick your destination</header>
      <DestinationNavigation className={classes.nav} />
      <section className={classes.outlet}>
        <Outlet />
      </section>
    </div>
  );
}

export default DestinationLayout;
