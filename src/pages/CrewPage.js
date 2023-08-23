import React from "react";

import DotIndicators from "../components/DotIndicators";

import { getImagePaths } from "../utils";

import "./CrewPage.css";

const crewData = [
  {
    id: "01",
    name: "Douglas Hurley",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    isActive: true,
  },
  {
    id: "02",
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    isActive: false,
  },
  {
    id: "03",
    name: "Victor Glover",
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    isActive: false,
  },
  {
    id: "04",
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    isActive: false,
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
  const crewMemberId = "01";
  const crewMemberData = getMatchingCrewMember(crewData, crewMemberId);
  const imageKey = getImageKeyFromName(crewMemberData.name);
  const imagePaths = getImagePaths("crew", imageKey);
  return (
    <>
      <div className="background background--crew"></div>
      <div className="grid-container grid-container--crew flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> Meet your crew
        </h1>
        <DotIndicators items={crewData} />
        <article className="crew-details flow">
          <header className="flow flow--space-small">
            <h2 className="fs-600 ff-serif uppercase">Commander</h2>
            <p className="fs-700 uppercase ff-serif">Douglas Hurley</p>
          </header>
          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </article>
        <picture>
          <source srcSet={imagePaths.webp} type="image/webp" />
          <img src={imagePaths.png} alt="crew member"></img>
        </picture>
      </div>
    </>
  );
}

export default CrewPage;
