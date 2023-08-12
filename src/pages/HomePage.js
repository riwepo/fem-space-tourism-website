import React from "react";

import classes from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={`${classes.backgroundContainer}`}>
      <div className={`grid-container`}>
        <div>
          <h1
            className={`ff-sans-cond fs-500 upper-case letter-spacing-1 text-accent`}
          >
            So you want to travel to
            <span className="ff-serif fs-900 upper-case text-light d-block">
              Space
            </span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <a
            href="#dummy"
            className="large-button upper-case ff-serif text-dark bg-light fs-600"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
