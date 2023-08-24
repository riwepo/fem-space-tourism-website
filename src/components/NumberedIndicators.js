import React, { useRef, useEffect } from "react";

import { getClickHandler, getKeyDownHandler } from "../utils";

import "./NumberedIndicators.css";

function NumberedIndicators({ items, activeItemIndex, onIndexChange }) {
  const buttonRefs = useRef([]);
  useEffect(() => {
    buttonRefs.current[activeItemIndex].focus();
  }, [activeItemIndex]);
  const clickHandler = getClickHandler(onIndexChange);
  const keyDownHandler = getKeyDownHandler(
    items.length,
    activeItemIndex,
    onIndexChange
  );
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
