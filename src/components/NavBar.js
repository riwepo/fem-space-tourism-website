import React from "react";

import NavItem from "./NavItem";

import classes from "./NavBar.module.css";

const navSpec = [
  { id: "00", label: "HOME", path: "/" },
  { id: "01", label: "DESINATION", path: "/destination" },
  { id: "02", label: "CREW", path: "/crew" },
  { id: "03", label: "TECHNOLOGY", path: "/technology" },
];

function NavBar({ className, isOpen }) {
  return (
    <nav
      className={`${className} ${classes.nav} ${
        isOpen ? classes.navOpen : undefined
      }`}
    >
      <ul className={classes.list}>
        {navSpec.map((item) => {
          return (
            <NavItem key={item.id} className={classes.navitem} item={item} />
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
