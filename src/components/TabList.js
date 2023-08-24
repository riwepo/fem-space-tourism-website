import React, { useRef, useEffect } from "react";

import { getClickHandler, getKeyDownHandler } from "../utils";

import "./TabList.css";

function TabList({ items, activeItemIndex, onIndexChange }) {
  const tabRefs = useRef([]);
  useEffect(() => {
    tabRefs.current[activeItemIndex].focus();
  }, [activeItemIndex]);
  const clickHandler = getClickHandler(onIndexChange);
  const keyDownHandler = getKeyDownHandler(
    items.length,
    activeItemIndex,
    onIndexChange
  );
  return (
    <div className="tab-list flex" role="tablist" onKeyDown={keyDownHandler}>
      {items.map((item, index) => {
        return (
          <button
            key={item.id}
            aria-selected={index === activeItemIndex}
            className="ff-sans-cond uppercase text-accent letter-spacing-2 underline-indicator"
            data-item-index={index}
            onClick={clickHandler}
            ref={(element) => (tabRefs.current[index] = element)}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}

export default TabList;
