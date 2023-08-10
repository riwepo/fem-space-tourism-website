import React, { useState } from "react";

import NavBar from "./NavBar";

import logo from "../assets/shared/logo.svg";
import iconHamburger from "../assets/shared/icon-hamburger.svg";
import iconClose from "../assets/shared/icon-close.svg";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuClickHandler = (event) => {
    setIsMenuOpen((current) => !current);
  };
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo} alt="space logo" />
      <NavBar className={classes.navBar} isOpen={isMenuOpen} />
      {!isMenuOpen && (
        <img
          className={classes.menu}
          src={iconHamburger}
          alt="hamgurger menu"
          onClick={menuClickHandler}
        />
      )}
      {isMenuOpen && (
        <img
          className={classes.menu}
          src={iconClose}
          alt="close menu"
          onClick={menuClickHandler}
        />
      )}
    </header>
  );
}

export default MainNavigation;
