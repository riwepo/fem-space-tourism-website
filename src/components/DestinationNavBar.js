import React from "react";

import NavBar from "./NavBar";

import classes from "./DestinationNavBar.module.css";

function DestinationNavBar({ className, navSpec, isOpen }) {
  return (
    <NavBar
      className={className}
      classes={classes}
      navSpec={navSpec}
      isOpen={isOpen}
    />
  );
}

export default DestinationNavBar;
