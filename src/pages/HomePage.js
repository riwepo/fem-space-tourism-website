import React from "react";

import LargeButton from "../components/LargeButton";

import "../css/utils/background.css";
import "../css/utils/grid-container.css";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="background background--home"></div>
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
        <LargeButton />
      </div>
    </>
  );
}

export default HomePage;
