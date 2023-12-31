import React, { useState } from "react";

import TabList from "../components/TabList";

import { getImagePaths } from "../utils";

import "../css/utils/numbered-title.css";
import "./DestinationPage.css";

const destinationsData = [
  {
    id: "1",
    name: "Moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    id: "2",
    name: "Mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    id: "3",
    name: "Europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    id: "4",
    name: "Titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

function DestinationPage() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const destinationData = destinationsData[activeItemIndex];
  const imageKey = destinationData.name.toLowerCase();
  const imagePaths = getImagePaths("destination", imageKey);
  const tabChangeHandler = (index) => {
    setActiveItemIndex(index);
  };
  return (
    <>
      <div className="background background--destination"></div>
      <div className="grid-container grid-container--destination flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">02</span> Pick your destination
        </h1>
        <picture>
          <source srcSet={imagePaths.webp} type="image/webp" />
          <img src={imagePaths.png} alt="the moon"></img>
        </picture>
        <TabList
          items={destinationsData}
          activeItemIndex={activeItemIndex}
          onIndexChange={tabChangeHandler}
        />
        <article className="destination-info flow">
          <h2 className="ff-serif fs-800 uppercase">{destinationData.name}</h2>
          <p>{destinationData.description}</p>
          <div className="destination-meta flex">
            <div>
              <h3 className="fs-200 uppercase text-accent">Avg. distance</h3>
              <p className="ff-serif uppercase">{destinationData.distance}</p>
            </div>
            <div>
              <h3 className="fs-200 uppercase text-accent">Est. travel time</h3>
              <p className="ff-serif uppercase">{destinationData.travel}</p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default DestinationPage;
