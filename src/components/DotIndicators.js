import React from "react";

import "./DotIndicators.css";

function DotIndicators({ items }) {
  return (
    <div className="dot-indicators flex">
      {items.map((item) => {
        return (
          <button key={item.id} aria-selected={item.isActive}>
            <span className="sr-only">The {item.role}</span>
          </button>
        );
      })}
    </div>
  );
}

export default DotIndicators;
