import React from "react";

import "./DotIndicators.css";

function DotIndicators() {
  return (
    <div className="dot-indicators flex">
      <button aria-selected="true">
        <span className="sr-only">Slide title</span>
      </button>
      <button aria-selected="false">
        <span className="sr-only">Slide title</span>
      </button>
      <button aria-selected="false">
        <span className="sr-only">Slide title</span>
      </button>
    </div>
  );
}

export default DotIndicators;
