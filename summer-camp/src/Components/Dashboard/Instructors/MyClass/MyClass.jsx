/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import usePayment from "../../../Hooks/usePayment";

const MyClass = () => {
  const [myClass, setMyClass] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructorsClasses")
      .then((res) => res.json())
      .then((data) => setMyClass(data));
  }, []);

  const handleUpdated = (myClass) => {
    fetch(`http://localhost:5000/instructorsClasses/${myClass._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Good job!", "Class Updated!", "success");
      });
    fetch(`http://localhost:5000/instructorsClasses/${myClass._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Good job!", "Class Updated!", "success");
      });
  };
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th className="text-[20px]">Image</th>
                <th className="text-[20px]">Class Name</th>
                <th className="text-[20px]">Instructor</th>
                <th className="text-[20px]">Instructor Email</th>
                <th className="text-[20px]">Seats</th>
                <th className="text-[20px]">Price</th>
                <th className="text-[20px]">Enrolled</th>
                <th className="text-[20px]">Feedback</th>
                <th className="text-[20px]">Status</th>
                <th className="text-[20px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {myClass.map((myClass, index) => {
                return (
                  <tr key={myClass._id}>
                    <th className="text-[20px]">
                      <label>{index + 1}</label>
                    </th>
                    <td className="text-[20px]">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={myClass?.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-[20px]">{myClass.name}</td>
                    <td className="text-[20px]">{myClass.instructor}</td>
                    <td className="text-[20px]">{myClass.email}</td>
                    <td className="text-[20px]">{myClass.seats}</td>
                    <td className="text-[20px]">{myClass.price}</td>
                    <td className="text-[20px]">{myClass.enrolled}</td>
                    <td className="text-[20px]">{myClass.feedback}</td>
                    <td className="badge badge-secondary badge-outline">
                      {myClass.status}
                    </td>
                    <th>
                      <button
                        onClick={() => handleUpdated(myClass)}
                        className="btn btn-ghost btn-xs"
                      >
                        Update
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
