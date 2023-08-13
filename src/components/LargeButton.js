import React from "react";

import classes from "./LargeButton.module.css";

function LargeButton({ className }) {
  return (
    <div className={`${className} ${classes.container}`}>
      <a
        href="#dummy"
        className={`upper-case ff-serif text-dark bg-light fs-600 ${classes.a}`}
      >
        Explore
      </a>
    </div>
  );
}

export default LargeButton;
