import React, { useRef, useEffect } from "react";

import "./NumberedIndicators.css";

function NumberedIndicators({ items, activeItemIndex, onIndexChange }) {
  const buttonRefs = useRef([]);
  useEffect(() => {
    buttonRefs.current[activeItemIndex].focus();
  }, [activeItemIndex]);
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
    <div className="numbered-indicators flex" onKeyDown={keyDownHandler}>
      {items.map((item, index) => {
        return (
          <button
            aria-selected={index === activeItemIndex}
            key={item.id}
            onClick={clickHandler}
            data-item-index={index}
            ref={(element) => (buttonRefs.current[index] = element)}
          >
            <span className="sr-only">{item.name}</span>
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}

export default NumberedIndicators;
