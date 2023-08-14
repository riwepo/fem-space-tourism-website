import React from "react";

import NavBar from "./NavBar";

import classes from "./MainNavBar.module.css";

function MainNavBar({ className, navSpec, isOpen }) {
  return (
    <NavBar
      className={className}
      classes={classes}
      navSpec={navSpec}
      isOpen={isOpen}
    />
  );
}

export default MainNavBar;
