import React from "react";

import "./TabList.css";

function TabList() {
  return (
    <div className="tab-list underline-indicators flex">
      <button
        aria-selected="true"
        className="ff-sans-cond upper-case text-accent letter-spacing-2 bg-dark"
      >
        Moon
      </button>
      <button
        aria-selected="false"
        className="ff-sans-cond upper-case text-accent letter-spacing-2 bg-dark"
      >
        Mars
      </button>
      <button
        aria-selected="false"
        className="ff-sans-cond upper-case text-accent letter-spacing-2 bg-dark"
      >
        Europa
      </button>
    </div>
  );
}

export default TabList;
