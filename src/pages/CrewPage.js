import React from "react";
import { useLocation } from "react-router-dom";

import { getLastSegmentFromPath, getImagePath } from "../utils";

import "../shared_css/centered-grid.css";
import "./DestinationPage.css";

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
  const path = useLocation();
  //console.log(path);
  const crewMemberId = getLastSegmentFromPath(path);
  //console.log(crewMemberId);
  const crewMemberData = getMatchingCrewMember(crewData, crewMemberId);
  //console.log(crewMemberData);
  const imageKey = getImageKeyFromName(crewMemberData.name);
  //console.log(imageKey);
  const imagePath = getImagePath("crew", imageKey);
  //console.log(imagePath);
  return (
    <div className="destination-page centered-grid">
      <img
        src={imagePath}
        alt={crewMemberData.name}
        className="centered-grid-c2"
      />
      <div className="centered-grid-c3">
        <h2 className="ff-serif upper-case fs-800">{crewMemberData.name}</h2>
        <p className="ff-sans-normal fs-400 text-accent">
          {crewMemberData.description}
        </p>
        <div className="details flex">
          <div>
            <p className="ff-serif-cond fs-200 text-accent upper-case letter-spacing-3">
              Avg. distance
            </p>
            <p className="ff-serif fs-500 upper-case">
              {crewMemberData.distance}
            </p>
          </div>
          <div>
            <p className="ff-serif-cond fs-200 text-accent upper-case letter-spacing-3">
              Est. travel time
            </p>
            <p className="ff-serif fs-500 upper-case">
              {crewMemberData.travel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrewPage;
