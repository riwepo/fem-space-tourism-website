import React from "react";

import CrewNavBar from "./CrewNavBar";

const crewNavSpec = [
  { id: "00", path: "/crew/01" },
  { id: "01", path: "/crew/02" },
  { id: "02", path: "/crew/03" },
  { id: "03", path: "/crew/04" },
];
function CrewNavigation({ className }) {
  return (
    <nav className={className}>
      <CrewNavBar navSpec={crewNavSpec} />
    </nav>
  );
}

export default CrewNavigation;
