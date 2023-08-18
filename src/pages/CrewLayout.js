import React from "react";
import { Outlet } from "react-router-dom";

import "../css/utils/centered-grid.css";
import "../css/utils/background.css";
import "./CrewLayout.css";

function CrewLayout() {
  return (
    <>
      <div className="background background--crew"></div>
      <div className="crew-layout centered-grid">
        <article className="article centered-grid-c23">
          <Outlet />
        </article>
      </div>
    </>
  );
}

export default CrewLayout;
