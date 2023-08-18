import React from "react";

import "./LargeButton.css";

function LargeButton({ className }) {
  return (
    <div className={`large-button ${className}`}>
      <a href="#" className="ff-serif fs-600 upper-case text-dark bg-light">
        Explore
      </a>
    </div>
  );
}

export default LargeButton;
