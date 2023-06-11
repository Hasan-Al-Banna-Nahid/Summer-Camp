/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("Instructors.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl text-center font-bold">Popular Instructors</h2>
      <div className="grid md:grid-cols-3">
        {instructors.map((instructor) => {
          return (
            <div key={instructor._id}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={instructor.image} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-[28px]">{instructor.name}</h2>
                  <p className="font-semibold">{instructor.field}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularInstructors;
