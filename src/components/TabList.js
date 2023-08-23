import React, { useRef, useEffect } from "react";

import "./TabList.css";

function TabList({ items, activeTabIndex, onIndexChange }) {
  const tabRefs = useRef([]);
  useEffect(() => {
    tabRefs.current[activeTabIndex].focus();
  }, [activeTabIndex]);
  const clickHandler = (event) => {
    const index = +event.target.dataset.tabIndex;
    onIndexChange(index);
  };
  const keyDownHandler = (event) => {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    if (event.keyCode === LEFT_KEY && activeTabIndex > 0) {
      onIndexChange(activeTabIndex - 1);
    } else if (
      event.keyCode === RIGHT_KEY &&
      activeTabIndex < items.length - 1
    ) {
      onIndexChange(activeTabIndex + 1);
    }
  };
  return (
    <div className="tab-list flex" role="tablist" onKeyDown={keyDownHandler}>
      {items.map((item, index) => {
        return (
          <button
            key={item.id}
            aria-selected={index === activeTabIndex}
            className="ff-sans-cond uppercase text-accent letter-spacing-2 underline-indicator"
            data-tab-index={index}
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
