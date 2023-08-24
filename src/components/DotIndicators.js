import React, { useRef, useEffect } from "react";

import { getClickHandler, getKeyDownHandler } from "../utils";

import "./DotIndicators.css";

function DotIndicators({ items, activeItemIndex, onIndexChange }) {
  const dotRefs = useRef([]);
  useEffect(() => {
    dotRefs.current[activeItemIndex].focus();
  }, [activeItemIndex]);
  const clickHandler = getClickHandler(onIndexChange);

  const keyDownHandler = getKeyDownHandler(
    items.length,
    activeItemIndex,
    onIndexChange
  );

  return (
    <div className="dot-indicators flex" onKeyDown={keyDownHandler}>
      {items.map((item, index) => {
        return (
          <button
            key={item.id}
            aria-selected={index === activeItemIndex}
            data-item-index={index}
            onClick={clickHandler}
            ref={(element) => (dotRefs.current[index] = element)}
          >
            <span className="sr-only">{item.role}</span>
          </button>
        );
      })}
    </div>
  );
}

export default DotIndicators;
