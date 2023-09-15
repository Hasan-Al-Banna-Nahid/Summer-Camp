/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
// import PopularInstructors from "../PopularInstructors/PopularInstructors";
import OurFeatures from "../OurFeatures/OurFeatures";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <PopularClasses />
      {/* <PopularInstructors /> */}
      <OurFeatures />
      <Footer />
    </div>
  );
};

export default Home;
