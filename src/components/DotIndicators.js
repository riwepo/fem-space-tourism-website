import React from "react";

import "./DotIndicators.css";

function DotIndicators({ items, activeItemIndex, onIndexChange }) {
  const clickHandler = (event) => {
    const index = +event.target.dataset.itemIndex;
    onIndexChange(index);
  };
  const keyDownHandler = (event) => {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    if (event.keyCode === LEFT_KEY && activeItemIndex > 0) {
      onIndexChange(activeItemIndex - 1);
    } else if (
      event.keyCode === RIGHT_KEY &&
      activeItemIndex < items.length - 1
    ) {
      onIndexChange(activeItemIndex + 1);
    }
  };
  return (
    <div className="dot-indicators flex" onKeyDown={keyDownHandler}>
      {items.map((item, index) => {
        return (
          <button
            key={item.id}
            aria-selected={index === activeItemIndex}
            data-item-index={index}
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
