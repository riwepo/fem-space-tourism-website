import React from "react";

import "./TabList.css";

function TabList({ items }) {
  return (
    <div className="tab-list flex">
      {items.map((item) => {
        return (
          <button
            key={item.id}
            aria-selected={item.isActive}
            className="ff-sans-cond uppercase text-accent letter-spacing-2 underline-indicator"
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}

export default TabList;
