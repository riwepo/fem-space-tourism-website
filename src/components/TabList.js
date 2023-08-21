import React from "react";

import "./TabList.css";

function TabList() {
  return (
    <div className="tab-list flex">
      <button
        aria-selected="true"
        className="ff-sans-cond uppercase text-accent letter-spacing-2 bg-dark underline-indicator"
      >
        Moon
      </button>
      <button
        aria-selected="false"
        className="ff-sans-cond uppercase text-accent letter-spacing-2 bg-dark underline-indicator"
      >
        Mars
      </button>
      <button
        aria-selected="false"
        className="ff-sans-cond uppercase text-accent letter-spacing-2 bg-dark underline-indicator"
      >
        Europa
      </button>
    </div>
  );
}

export default TabList;
