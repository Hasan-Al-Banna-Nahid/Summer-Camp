/* eslint-disable no-unused-vars */
import React from "react";

const PopularClasses = () => {
  return (
    <div className="md:my-12 mx-auto">
      <h2 className="text-2xl text-center font-bold">Popular Classes</h2>
      <div className="grid md:grid-cols-2 md:gap-6 mx-auto">
        <div>
          <div className="card md:w-[620px] bg-base-100 shadow-xl">
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src="/assests/male_soccer_football_player_training_action_isolated_gradient_studio_neon_light.jpg"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-3xl font-bold">Football Camp</h1>

                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card md:w-[620px] bg-base-100 shadow-xl">
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src="/assests/cover.jpg"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-3xl font-bold">Basket Ball Camp</h1>

                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card md:w-[620px] bg-base-100 shadow-xl">
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src="/assests/cricket.jpg"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-3xl font-bold">Cricket Camp</h1>

                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card md:w-[620px] bg-base-100 shadow-xl">
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src="/assests/volleyball.jpg"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-3xl font-bold">Volleyball Camp</h1>

                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card md:w-[620px] bg-base-100 shadow-xl">
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src="/assests/swim.jpg"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-3xl font-bold">Swim Camp</h1>

                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card md:w-[620px] bg-base-100 shadow-xl">
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src="/assests/tenis.jpg"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-3xl font-bold">Tenis Camp</h1>

                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
