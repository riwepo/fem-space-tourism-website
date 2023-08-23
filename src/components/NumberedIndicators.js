import React from "react";

import "./NumberedIndicators.css";

function NumberedIndicators({ items, activeItemIndex, onIndexChange }) {
  return (
    <div className="numbered-indicators grid">
      {items.map((item, index) => {
        return (
          <button aria-selected={index === activeItemIndex} key={item.id}>
            <span className="sr-only">{item.name}</span>
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}

export default NumberedIndicators;
