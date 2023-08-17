import React from "react";

import CrewNavBar from "./CrewNavBar";

const crewNavSpec = [
  { id: "01", path: "/crew/01" },
  { id: "02", path: "/crew/02" },
  { id: "03", path: "/crew/03" },
  { id: "04", path: "/crew/04" },
];

function CrewNavigation({ className }) {
  return (
    <nav className={className}>
      <CrewNavBar className={className} navSpec={crewNavSpec} />
    </nav>
  );
}

export default CrewNavigation;
