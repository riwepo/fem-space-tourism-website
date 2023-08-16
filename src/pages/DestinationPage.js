import React from "react";
import { useLocation } from "react-router-dom";

import { getLastSegmentFromPath, getImagePath } from "../utils";

import "../shared_css/centered-grid.css";
import "./DestinationPage.css";

const destinationsData = [
  {
    name: "Moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

const getMatchingDestination = (data, name) => {
  const destinations = data.filter((item) => item.name.toLowerCase() === name);
  if (destinations.length !== 1) {
    throw new Error(
      `${destinations.length} matching destinations found for path segment '${name}'`
    );
  }
  return destinations[0];
};

function DestinationPage() {
  const path = useLocation();
  //console.log(path);
  const destination = getLastSegmentFromPath(path);
  //console.log(destination);
  const destinationData = getMatchingDestination(destinationsData, destination);
  //console.log(destinationData);
  const imagePath = getImagePath("destination", destination);
  //console.log(imagePath);
  return (
    <div className="destination-page centered-grid">
      <img
        src={imagePath}
        alt={destination.name}
        className="centered-grid-c2"
      />
      <div className="centered-grid-c3">
        <h2 className="ff-serif upper-case fs-800">{destinationData.name}</h2>
        <p className="ff-sans-normal fs-400 text-accent">
          {destinationData.description}
        </p>
        <div className="details flex">
          <div>
            <p className="ff-serif-cond fs-200 text-accent upper-case letter-spacing-3">
              Avg. distance
            </p>
            <p className="ff-serif fs-500 upper-case">
              {destinationData.distance}
            </p>
          </div>
          <div>
            <p className="ff-serif-cond fs-200 text-accent upper-case letter-spacing-3">
              Est. travel time
            </p>
            <p className="ff-serif fs-500 upper-case">
              {destinationData.travel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationPage;
