import React from "react";

import NavBar from "./NavBar";

import logo from "../assets/shared/logo.svg";
import iconHamburger from "../assets/shared/icon-hamburger.svg";
import iconClose from "../assets/shared/icon-close.svg";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo} alt="space logo" />
      <NavBar />
      <img className={classes.menu} src={iconHamburger} alt="hamgurger menu" />
    </header>
  );
}

export default MainNavigation;
