import React from "react";
import { Outlet, useLocation } from "react-router-dom";

// import MainNavigation from "../components/MainNavigation";
import PrimaryHeader from "../components/PrimaryHeader";
import LargeButton from "../components/LargeButton";

import "../css/utils/centered-grid.css";
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

  return (
    <div className="root-layout">
      <PrimaryHeader />
      <div className="grid-container grid-container--home">
        <div>
          <h1 className="ff-sans-cond fs-500 text-accent uppercase letter-spacing-1">
            So, you want to travel to{" "}
            <span className="ff-serif fs-900 text-light uppercase d-block">
              Space
            </span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience! Explore
          </p>
        </div>
        <LargeButton className="large-button" />
      </div>
      {/* <main>
        <div
          className={`centered-grid title-container ${
            title.length > 0 ? "title-container--displayed" : undefined
          }`}
        >
          <h1 className="ff-sans-con fs-500 uppercase letter-spacing-1 centered-grid-c23 title">
            <span aria-hidden="true">{titleIndex}</span> {titleText}
          </h1>
        </div>
        <Outlet />
      </main> */}
    </div>
  );
}

export default RootLayout;
