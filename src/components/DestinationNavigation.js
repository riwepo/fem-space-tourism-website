import React from "react";

import DestinationNavBar from "./DestinationNavBar";

import classes from "./DestinationNavigation.module.css";

const destinationNavSpec = [
  { id: "00", label: "MOON", path: "/moon" },
  { id: "01", label: "MARS", path: "/mars" },
  { id: "02", label: "EUROPA", path: "/europa" },
  { id: "03", label: "TITAN", path: "/titan" },
];
function DestinationNavigation({ className }) {
  return (
    <nav className={className}>
      <DestinationNavBar
        className={classes.navBar}
        navSpec={destinationNavSpec}
        isOpen={true}
      />
    </nav>
  );
}

export default DestinationNavigation;
