import React, { useState } from "react";

import logo from "../assets/shared/logo.svg";
import iconHamburger from "../assets/shared/icon-hamburger.svg";
import iconClose from "../assets/shared/icon-close.svg";

import "./PrimaryHeader.css";
import PrimaryNavigation from "./PrimaryNavigation";

const mainNavSpec = [
  { id: "00", label: "HOME", path: "/" },
  { id: "01", label: "DESTINATION", path: "/destination" },
  { id: "02", label: "CREW", path: "/crew" },
  { id: "03", label: "TECHNOLOGY", path: "/technology" },
];

function PrimaryHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuClickHandler = (event) => {
    setIsMenuOpen((current) => !current);
  };
  return (
    <header className="primary-header flex">
      <div>
        <img className="logo" src={logo} alt="space logo" />
      </div>
      <PrimaryNavigation isOpen={isMenuOpen} />
      {!isMenuOpen && (
        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
        >
          <span className="sr-only">Menu</span>
          <img
            className="menu"
            src={iconHamburger}
            alt="hamgurger menu"
            onClick={menuClickHandler}
          />
        </button>
      )}
      {isMenuOpen && (
        <button>
          <span className="sr-only">Menu</span>
          <img
            className="menu"
            src={iconClose}
            alt="close menu"
            onClick={menuClickHandler}
          />
        </button>
      )}
    </header>
  );
}

export default PrimaryHeader;
