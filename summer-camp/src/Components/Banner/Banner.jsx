/* eslint-disable no-unused-vars */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import LazyLoad from "react-lazy-load";
import { TypeAnimation } from "react-type-animation";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <div>
      <Carousel dynamicHeight={1} autoPlay infiniteLoop>
        <div style={{ height: "800px" }}>
          <img
            className="w-full "
            src="/assests/male_soccer_football_player_training_action_isolated_gradient_studio_neon_light.jpg"
          />
          <p className="legend text-white">Football</p>
        </div>
      </Carousel>
      <div>
        <h2 className=" text-3xl font-bold text-center my-12">
          <span className="my-8 text-center font-bold text-4xl text-slate-950">
            {" "}
            Summer Camp Fun
          </span>
          <br />
          <TypeAnimation
            sequence={["Students", 1000, "Camp Lover", 1000]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "1em",
              display: "inline-block",
              color: "#9b59b6",
              marginTop: "0.7rem",
            }}
            repeat={Infinity}
          />
        </h2>
        <div className="w-96 mx-auto my-3">
          <button className="btn btn-primary mx-12 font-bold">
            Start Summer Camp For Free
          </button>
        </div>
      </div>
      <div>
        <img
          width={800}
          height={600}
          className="rounded-lg mx-auto"
          src="/assests/cover.jpg"
          alt=""
        />
        <h2 className="text-center font-bold my-4 text-slate-800">
          Trusted by 60,000+ freelancers, marketing teams and agencies.
        </h2>
        <Marquee style={{ width: "400px", margin: "0 auto" }}>
          <div className="flex justify-center items-center bg-slate-500 p-6 rounded-lg">
            <div className="mx-6 ">
              <img width={100} height={100} src="/s1.png" alt="" />
            </div>
            <div className="mx-6 ">
              <img width={100} height={100} src="/s2.png" alt="" />
            </div>
            <div className="mx-6 ">
              <img width={100} height={100} src="/s3.png" alt="" />
            </div>
            <div className="mx-6 ">
              <img width={100} height={100} src="/s4.png" alt="" />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Banner;
