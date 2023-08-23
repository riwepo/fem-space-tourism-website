import React, { useState } from "react";

import DotIndicators from "../components/DotIndicators";

import { getImagePaths } from "../utils";

import "./CrewPage.css";

const crewData = [
  {
    id: "1",
    name: "Douglas Hurley",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    id: "2",
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    id: "3",
    name: "Victor Glover",
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    id: "4",
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const getImageKeyFromName = (name) => {
  const lowerCase = name.toLowerCase();
  const spacesToDash = lowerCase.replace(" ", "-");
  return spacesToDash;
};

function CrewPage() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const crewMemberData = crewData[activeItemIndex];
  const imageKey = getImageKeyFromName(crewMemberData.name);
  const imagePaths = getImagePaths("crew", imageKey);

  const indexChangeHandler = (index) => {
    setActiveItemIndex(index);
  };
  return (
    <>
      <div className="background background--crew"></div>
      <div className="grid-container grid-container--crew flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">03</span> Meet your crew
        </h1>
        <DotIndicators
          items={crewData}
          activeItemIndex={activeItemIndex}
          onIndexChange={indexChangeHandler}
        />
        <article className="crew-details flow">
          <header className="flow flow--space-small">
            <h2 className="fs-600 ff-serif uppercase">{crewMemberData.role}</h2>
            <p className="fs-700 uppercase ff-serif">{crewMemberData.name}</p>
          </header>
          <p>{crewMemberData.bio}</p>
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
