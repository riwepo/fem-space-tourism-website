import React from "react";

import "./LargeButton.css";

function LargeButton({ className }) {
  return (
    <div className={`large-button ${className}`}>
      <a
        href="#dummy"
        className="upper-case ff-serif text-dark bg-light fs-600"
      >
        Explore
      </a>
    </div>
  );
}

export default LargeButton;
