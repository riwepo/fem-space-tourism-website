import React from "react";

import "./NumberedIndicators.css";

function NumberedIndicators() {
  return (
    <div className="numbered-indicators grid">
      <button aria-selected="true">
        <span className="sr-only">Slide title</span>1
      </button>
      <button aria-selected="false">
        <span className="sr-only">Slide title</span>2
      </button>
      <button aria-selected="false">
        <span className="sr-only">Slide title</span>3
      </button>
    </div>
  );
}

export default NumberedIndicators;
