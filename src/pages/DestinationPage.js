import React from "react";

import Destination from "../components/destination/Destination";

import imgMoon from "../assets/destination/image-moon.png";

import classes from "./DestinationPage.module.css";
import centeredGrid from "../shared_css/centered-grid.module.css";

function DestinationPage() {
  return (
    <div className={centeredGrid.centeredGrid}>
      <div>
        <h2
          className={`ff-sans-cond fs-500 upper-case letter-spacing-1 text-accent ${classes.h1}`}
        >
          Pick your destination
        </h2>
        <img src={imgMoon} alt="moon" />
      </div>
      <div>
        <Destination />
      </div>
    </div>
  );
}

export default DestinationPage;
