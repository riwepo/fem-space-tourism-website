import React from "react";
import { Outlet } from "react-router-dom";

import DestinationNavigation from "../components/destination/DestinationNavigation";

import classes from "./DestinationLayout.module.css";

function DestinationLayout() {
  return (
    <div className={classes.container}>
      <DestinationNavigation />
      <section className={classes.section}>
        <Outlet />
      </section>
    </div>
  );
}

export default DestinationLayout;
