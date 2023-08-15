import React from "react";
import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

// import classes from "./RootLayout.module.css";
import "./RootLayout.css";

function RootLayout() {
  return (
    <div className="root-layout">
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
