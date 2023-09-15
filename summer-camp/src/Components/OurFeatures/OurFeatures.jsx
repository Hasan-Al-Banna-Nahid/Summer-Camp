/* eslint-disable no-unused-vars */
import React from "react";
import { BsFillBoxSeamFill, BsMicFill, BsNewspaper } from "react-icons/bs";
import {
  FaArrowRight,
  FaHands,
  FaQuestion,
  FaStickyNote,
  FaToggleOff,
  FaToggleOn,
} from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { MdOutlineTaskAlt } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
const OurFeatures = () => {
  return (
    <div>
      <div className="text-center">
        <div className="badge my-6 text-2xl p-6 badge-secondary badge-outline">
          SummerCamp Benefits
        </div>
        <h2 className="text-center text-3xl font-bold my-4">
          Few Benefits Of Summer Camp
        </h2>
      </div>
      <div className="grid md:grid-cols-1 gap-6">
        {/* card1 */}
        <div className="flex justify-between items-start font-bold p-6 bg-[#F0EEFE] rounded-md">
          <div>
            <h2 className="text-4xl my-6 text-purple-600">
              Socializing and Friendship Building
            </h2>
            <p className="text-2xl my-6 ">
              Simply choose a template from available list to write <br />{" "}
              content for blog posts, landing page, website content etc.
            </p>
            <ul>
              <li>
                <MdOutlineTaskAlt />
                Available more than 10 template.
              </li>
              <li>
                <MdOutlineTaskAlt />A clean and minimalist editor.
              </li>
              <li>
                <MdOutlineTaskAlt />
                Article generator wizard.
              </li>
            </ul>
          </div>
          <div>
            <img
              className="border-4 border-purple-900"
              width={600}
              height={600}
              src="/assests/New folder/children_playing_grass_3pGi9Ihs_oNJLbKhs-tRZObKhs.jpg"
              alt=""
            />
          </div>
        </div>
        {/* Card1 */}
        {/* Card2 */}
        <div className="flex justify-between items-start font-bold p-6 bg-[#FDF9EB] rounded-md">
          <div>
            <h2 className="text-4xl my-6 text-blue-600">
              Eliminating Screen Time and Getting Exercise
            </h2>
            <p className="text-2xl my-6 ">
              Provide our AI content writer with few sentences on <br /> what
              you want to write, and it will start writing for you.
            </p>
            <ul>
              <li>
                <MdOutlineTaskAlt />
                Simply provide a few input as topic
              </li>
              <li>
                <MdOutlineTaskAlt />
                Type a topic like "best ways to earn money"
              </li>
              <li>
                <MdOutlineTaskAlt />
                Facebook Ads, Headlines and other 10
              </li>
            </ul>
          </div>
          <div>
            <img
              className="border-4 border-[#FEB399]"
              width={600}
              height={600}
              src="/assests/New folder/children_playing_grass_3pGi9Ihs_oNJLbKhs-tRZObKhs.jpg"
              alt=""
            />
          </div>
        </div>
        {/* Card2 */}
        {/* Card3 */}
        <div className="flex justify-between items-start font-bold p-6 bg-[#EAF8FE] rounded-md">
          <div>
            <h2 className="text-4xl my-6 text-blue-600">
              Personal Growth, Learning, and Development
            </h2>
            <p className="text-2xl my-6 ">
              Our powerful AI tools will generate content in few <br /> second,
              then you can export it to wherever you need.
            </p>
            <ul>
              <li>
                <MdOutlineTaskAlt />
                Generate content in under 30 seconds.
              </li>
              <li>
                <MdOutlineTaskAlt />
                All content is unique and original.
              </li>
              <li>
                <MdOutlineTaskAlt />
                Generate up to 200 words each time.
              </li>
            </ul>
          </div>
          <div>
            <img
              className="border-4 border-[#84BBFD]"
              width={600}
              height={600}
              src="/assests/New folder/children_playing_grass_3pGi9Ihs_oNJLbKhs-tRZObKhs.jpg"
              alt=""
            />
          </div>
        </div>
        {/* Card3 */}
        {/* Card4 */}
        <div>
          <div className="text-center">
            <div className="badge badge-primary badge-outline p-4">
              Use Cases
            </div>

            <p className="font-semibold">
              Let our Summer Camp assist with most time consuming to Fun,{" "}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 w-[800] mx-auto">
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <BsNewspaper className="text-4xl text-blue-700" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Explore Individual Interests!</h2>
                  <p className="font-semibold">
                    Generate optimized blog post and articles <br /> to get
                    organic traffic - making you visible on the world.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <BsFillBoxSeamFill className="text-4xl text-red-700" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Building Friendships!</h2>
                  <p className="font-semibold">
                    Create a perfect description for your products to <br />{" "}
                    engage your customers to click and buy.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <BsMicFill className="text-4xl text-purple-300" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">
                    Physical Activity and Healthy Living!
                  </h2>
                  <p className="font-semibold">
                    Create ads copies for your social media - make an <br />{" "}
                    impact with your online marketing campaigns.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <FaHands className="text-4xl text-cyan-400" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Product Benefits!</h2>
                  <p className="font-semibold">
                    Create a bullet point list of your product benefits that{" "}
                    <br /> appeal to your customers to purchase.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <SiGoogleanalytics className="text-4xl text-purple-500" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Suggest Improvements!</h2>
                  <p className="font-semibold">
                    Need to improve your existing content? <br /> Our AI will
                    rewrite and improve the content for you.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <FaStickyNote className="text-4xl text-blue-950" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Mental Stimulation!</h2>
                  <p className="font-semibold">
                    Write very attractive headlines, slogans <br /> or paragraph
                    for your landing page of your website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
