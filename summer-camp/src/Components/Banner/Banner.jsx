/* eslint-disable no-unused-vars */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div>
      <Carousel dynamicHeight={1}>
        <div>
          <img
            className="w-full h-1/2"
            src="assests/male-soccer-football-player-training-action-isolated-gradient-studio-neon-light.jpg"
          />
          <p className="legend text-white">Football</p>
        </div>
        <div>
          <img src="assests/red-ball-hitting-wicket-stumps-with-bat-black-abstract-splash-background-cricket-fever-concept/5492.jpg" />
          <p className="legend text-white">Cricket</p>
        </div>
        <div>
          <img src="assests/mysterious-nature-african-american-young-basketball-player-red-team-action-neon-lights-dark-studio-background-concept-sport-movement-energy-dynamic-healthy-lifestyle.jpg" />
          <p className="legend text-white">BasketBall</p>
        </div>
        <div>
          <img src="assests/hand-drawn-volleyball-silhouette/7152018.jpg" />
          <p className="legend text-white">VolleyBall</p>
        </div>
        <div>
          <img src="assests/children-swimming-race/21133.jpg" />
          <p className="legend text-white">Swimming</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
