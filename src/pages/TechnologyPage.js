import React, { useState } from "react";

import NumberedIndicators from "../components/NumberedIndicators";

import { getImagePaths } from "../utils";

import "./TechnologyPage.css";

const techData = [
  {
    id: "1",
    name: "Launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: "2",
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    id: "3",
    name: "Space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const getImageKeyFromName = (name) => {
  const lowerCase = name.toLowerCase();
  const spacesToDash = lowerCase.replace(" ", "-");
  return spacesToDash;
};

function TechnologyPage() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const techItemData = techData[activeItemIndex];
  const imageKey = getImageKeyFromName(techItemData.name);
  const imagePaths = getImagePaths("technology", imageKey, "landscape");

  const indexChangeHandler = (index) => {
    setActiveItemIndex(index);
  };
  return (
    <>
      <div className="background background--tech"></div>
      <div className="grid-container grid-container--tech flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">03</span> Space launch 101
        </h1>
        <picture>
          <source srcSet={imagePaths.jpg} type="image/jpg" />
          <img src={imagePaths.jpg} alt="technology item"></img>
        </picture>
        <NumberedIndicators
          items={techData}
          activeItemIndex={activeItemIndex}
          onIndexChange={indexChangeHandler}
        />
        <article className="tech-details flow">
          <header className="flow flow--space-small">
            <h2 className="ff-sans-cond fs-200 uppercase text-accent letter-spacing-3">
              The terminology...
            </h2>
            <p className="fs-700 uppercase ff-serif">{techItemData.name}</p>
          </header>
          <p className="ff-sans-normal fs-400 text-accent">
            {techItemData.description}
          </p>
        </article>
      </div>
    </>
  );
}

export default TechnologyPage;
