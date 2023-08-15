import React from "react";

import DestinationNavBar from "./DestinationNavBar";

const destinationNavSpec = [
  { id: "00", label: "MOON", path: "/destination/moon" },
  { id: "01", label: "MARS", path: "/destination/mars" },
  { id: "02", label: "EUROPA", path: "/destination/europa" },
  { id: "03", label: "TITAN", path: "/destination/titan" },
];
function DestinationNavigation({ className }) {
  return (
    <nav className={className}>
      <DestinationNavBar navSpec={destinationNavSpec} />
    </nav>
  );
}

export default DestinationNavigation;
