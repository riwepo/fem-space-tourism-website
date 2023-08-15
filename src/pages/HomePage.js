import React from "react";

import LargeButton from "../components/LargeButton";

import "./HomePage.css";
import "../shared_css/centered-grid.css";

function HomePage() {
  return (
    <div className={"home-page centered-grid"}>
      <div>
        <h1 className="ff-sans-cond fs-500 upper-case letter-spacing-1 text-accent">
          So you want to travel to
          <span className="ff-serif fs-900 upper-case text-light d-block">
            Space
          </span>
        </h1>
        <p className="text-accent">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <LargeButton className="button" />
      </div>
    </div>
  );
}

export default HomePage;
