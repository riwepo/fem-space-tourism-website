import React, { useState } from "react";

import NavBar from "./NavBar";

import logo from "../assets/shared/logo.svg";
import iconHamburger from "../assets/shared/icon-hamburger.svg";
import iconClose from "../assets/shared/icon-close.svg";

import classes from "./MainNavigation.module.css";

const mainNavSpec = [
  { id: "00", label: "HOME", path: "/" },
  { id: "01", label: "DESTINATION", path: "/destination" },
  { id: "02", label: "CREW", path: "/crew" },
  { id: "03", label: "TECHNOLOGY", path: "/technology" },
];

function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuClickHandler = (event) => {
    setIsMenuOpen((current) => !current);
  };
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo} alt="space logo" />
      <NavBar
        className={classes.navBar}
        navSpec={mainNavSpec}
        isOpen={isMenuOpen}
      />
      {!isMenuOpen && (
        <img
          className={`${classes.menu} ${classes.menuOpen}`}
          src={iconHamburger}
          alt="hamgurger menu"
          onClick={menuClickHandler}
        />
      )}
      {isMenuOpen && (
        <img
          className={`${classes.menu} ${classes.menuClose}`}
          src={iconClose}
          alt="close menu"
          onClick={menuClickHandler}
        />
      )}
    </header>
  );
}

export default MainNavigation;
