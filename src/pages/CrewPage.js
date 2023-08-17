import React from "react";
import { useParams } from "react-router-dom";

import CrewNavigation from "../components/CrewNavigation";

import { getImagePath } from "../utils";

import "../shared_css/centered-grid.css";
import "./CrewPage.css";

const crewData = [
  {
    id: "01",
    name: "Douglas Hurley",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    id: "02",
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    id: "03",
    name: "Victor Glover",
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    id: "04",
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const getMatchingCrewMember = (data, id) => {
  const crewMembers = data.filter((item) => item.id.toLowerCase() === id);
  if (crewMembers.length !== 1) {
    throw new Error(
      `${crewMembers.length} matching crew members found for path segment '${id}'`
    );
  }
  return crewMembers[0];
};

const getImageKeyFromName = (name) => {
  const lowerCase = name.toLowerCase();
  const spacesToDash = lowerCase.replace(" ", "-");
  return spacesToDash;
};

function CrewPage() {
  const params = useParams();
  const crewMemberId = params.id;
  const crewMemberData = getMatchingCrewMember(crewData, crewMemberId);
  const imageKey = getImageKeyFromName(crewMemberData.name);
  const imagePath = getImagePath("crew", imageKey);
  return (
    <div className="crew-page centered-grid">
      <div className="content centered-grid-c2">crew content</div>
      <CrewNavigation className="navigation centered-grid-c2" />
      <img
        src={imagePath}
        alt={crewMemberData.name}
        className="centered-grid-c3"
      />
    </div>
  );
}

export default CrewPage;
