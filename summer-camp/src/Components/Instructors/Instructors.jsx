/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useInstructors from "../Hooks/useInstructors";

const Instructors = () => {
  const [instructors] = useInstructors();
  return (
    <div>
      <Header />
      <h2 className="text-3xl font-bold text-center">Instructors</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {instructors.map((instructor, index) => {
          return (
            <div key={index} className="card w-96 h-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={instructor.image}
                  alt={instructor.instructor}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-semibold">
                  Name : {instructor.instructor}
                </h2>
                <p className="text-[18px] font-semibold">
                  {" "}
                  Email : {instructor.email}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Instructors;
