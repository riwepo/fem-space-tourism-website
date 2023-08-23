import React from "react";
import { Link } from "react-router-dom";

import "./LargeButton.css";

function LargeButton({ className }) {
  return (
    <div className={`large-button ${className}`}>
      <Link
        to="/destination"
        className="ff-serif fs-600 uppercase text-dark bg-light"
      >
        Explore
      </Link>
    </div>
  );
}

export default LargeButton;
