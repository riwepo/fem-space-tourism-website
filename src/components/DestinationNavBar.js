import React from "react";

import NavBar from "./NavBar";

import classes from "./DestinationNavBar.module.css";

// this is a wrapper around NavBar with CSS classes for destination navigation
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
