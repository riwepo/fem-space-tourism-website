import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

import "../shared_css/centered-grid.css";
import "./RootLayout.css";

const getTitle = (path) => {
  if (path.indexOf("destination") !== -1) {
    return ["01", "pick your destination"];
  } else if (path.indexOf("crew") !== -1) {
    return ["02", "meet your crew"];
  } else if (path.indexOf("technology") !== -1) {
    return ["03", "space launch 101"];
  } else return [];
};

function RootLayout() {
  const path = useLocation();
  const title = getTitle(path.pathname);
  const [titleIndex, titleText] = title;
  console.log(title);

  return (
    <div className="root-layout">
      <MainNavigation />
      <main>
        <div
          className={`centered-grid title-container ${
            title.length > 0 ? "title-container--displayed" : undefined
          }`}
        >
          <h1 className="ff-sans-con fs-500 upper-case letter-spacing-1 centered-grid-c23 title">
            <span aria-hidden="true">{titleIndex}</span> {titleText}
          </h1>
        </div>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
