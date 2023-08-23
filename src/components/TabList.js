import React from "react";

import "./TabList.css";

function TabList({ items, activeTabId, onTabChange }) {
  const clickHandler = (event) => {
    const id = event.target.dataset.id;
    onTabChange(id);
  };
  return (
    <div className="tab-list flex">
      {items.map((item) => {
        return (
          <button
            key={item.id}
            aria-selected={item.id === activeTabId}
            className="ff-sans-cond uppercase text-accent letter-spacing-2 underline-indicator"
            data-id={item.id}
            onClick={clickHandler}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}

export default TabList;
