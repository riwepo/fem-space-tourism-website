import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import PrimaryNavigation from "./PrimaryNavigation";

import logo from "../assets/shared/logo.svg";

import "./PrimaryHeader.css";

function PrimaryHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  const menuClickHandler = (event) => {
    setIsMenuOpen((current) => !current);
  };
  return (
    <header className="primary-header flex">
      <div>
        <img className="logo" src={logo} alt="space logo" />
      </div>
      <PrimaryNavigation isOpen={isMenuOpen} aria-expanded={isMenuOpen} />
      <button
        className="mobile-nav-toggle"
        data-is-menu-open={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={menuClickHandler}
      >
        <span className="sr-only">Menu</span>
      </button>
    </header>
  );
}

export default PrimaryHeader;
