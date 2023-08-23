import React from "react";

import "./DotIndicators.css";

function DotIndicators({ items, activeItemId, onItemChange }) {
  const clickHandler = (event) => {
    const id = event.target.dataset.id;
    onItemChange(id);
  };
  return (
    <div className="dot-indicators flex">
      {items.map((item) => {
        return (
          <button
            key={item.id}
            aria-selected={item.id === activeItemId}
            data-id={item.id}
            onClick={clickHandler}
          >
            <span className="sr-only">The {item.role}</span>
          </button>
        );
      })}
    </div>
  );
}

export default DotIndicators;
