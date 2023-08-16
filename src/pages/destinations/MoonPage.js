import React from "react";

import imageMoon from "../../assets/destination/image-moon.png";

import "../../shared_css/centered-grid.css";
import "./MoonPage.css";

function MoonPage() {
  return (
    <div className="moon-page centered-grid">
      <img src={imageMoon} alt="the moon" className="centered-grid-c2" />
      <div className="centered-grid-c3">
        <h2 className="ff-serif upper-case fs-800">Moon</h2>
        <p className="ff-sans-normal fs-400 text-accent">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div className="details flex">
          <div>
            <p className="ff-serif-cond fs-200 text-accent upper-case letter-spacing-3">
              Avg. distance
            </p>
            <p className="ff-serif fs-500 upper-case">384,400 km</p>
          </div>
          <div>
            <p className="ff-serif-cond fs-200 text-accent upper-case letter-spacing-3">
              Est. travel time
            </p>
            <p className="ff-serif fs-500 upper-case">3 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoonPage;
