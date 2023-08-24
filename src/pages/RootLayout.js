import React from "react";
import { Outlet } from "react-router-dom";

import PrimaryHeader from "../components/PrimaryHeader";

import "./RootLayout.css";

function RootLayout() {
  return (
    <div className="root-layout">
      <PrimaryHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
