import React, { useState } from "react";

import MainNavBar from "./MainNavBar";

import logo from "../assets/shared/logo.svg";
import iconHamburger from "../assets/shared/icon-hamburger.svg";
import iconClose from "../assets/shared/icon-close.svg";

import "./MainNavigation.css";

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
    <header className="main-navigation">
      <img className="logo" src={logo} alt="space logo" />
      <MainNavBar navSpec={mainNavSpec} isOpen={isMenuOpen} />
      {!isMenuOpen && (
        <img
          className="menu"
          src={iconHamburger}
          alt="hamgurger menu"
          onClick={menuClickHandler}
        />
      )}
      {isMenuOpen && (
        <img
          className="menu"
          src={iconClose}
          alt="close menu"
          onClick={menuClickHandler}
        />
      )}
    </header>
  );
}

export default MainNavigation;
