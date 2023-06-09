/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageClass = () => {
  const [myClass, setMyClass] = useState([]);
  const handleDeny = (id) => {
    fetch(`http://localhost:5000/instructorsClasses/${id}`, { method: "PATCH" })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Admin Has Denied This Class",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const handleApproved = (id) => {
    fetch(`http://localhost:5000/instructorsClasses/${id}`, { method: "PATCH" })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Admin Has Approved This Class",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  useEffect(() => {
    fetch("http://localhost:5000/instructorsClasses")
      .then((res) => res.json())
      .then((data) => setMyClass(data));
  }, []);
  return (
    <div>
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
                  <th className="text-[20px]">Instructor</th>
                  <th className="text-[20px]">Instructor Email</th>
                  <th className="text-[20px]">Seats</th>
                  <th className="text-[20px]">Price</th>
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

                      <td className="text-[20px]">{myClass.instructor}</td>
                      <td className="text-[20px]">{myClass.email}</td>
                      <td className="text-[20px]">{myClass.seats}</td>
                      <td className="text-[20px]">{myClass.price}</td>
                      <td className="badge badge-secondary badge-outline">
                        {myClass.status}
                      </td>
                      <th>
                        <button className="btn btn-ghost btn-xs">Update</button>
                        <button
                          onClick={() => handleApproved(myClass._id)}
                          className="btn btn-secondary btn-xs mx-2"
                          disabled={
                            myClass.status === "approved" ||
                            myClass.status === "denied"
                          }
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleDeny(myClass._id)}
                          disabled={
                            myClass.status === "approved" ||
                            myClass.status === "denied"
                          }
                          className="btn btn-info btn-xs"
                        >
                          Deny
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
    </div>
  );
};

export default ManageClass;
