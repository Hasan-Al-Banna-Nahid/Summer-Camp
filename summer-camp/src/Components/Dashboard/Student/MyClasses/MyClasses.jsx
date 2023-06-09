/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaTrash, FaWallet } from "react-icons/fa";
import Swal from "sweetalert2";
import useUser from "../../../Hooks/useUser";

const MyClasses = () => {
  const [refetch] = useUser();
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/classes/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };
  return (
    <div>
      <h2 className="text-center text-2xl my-6">My Classes</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-xl">#</th>
              <th className="text-xl">Name</th>
              <th className="text-xl">Instructor</th>
              <th className="text-xl">Available Seats</th>
              <th className="text-xl">Price</th>
              <th className="text-xl"></th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem, index) => {
              return (
                <tr key={classItem._id}>
                  <th className="text-lg text-center">{index + 1}</th>
                  <td className="text-lg text-center">{classItem.sport}</td>
                  <td className="text-lg text-center">
                    {classItem.instructor}
                  </td>
                  <td className="text-lg text-center">
                    {classItem.availableSeats}
                  </td>
                  <td className="text-lg text-center">{classItem.price}</td>
                  <td>
                    <div className="flex gap-6">
                      <div>
                        {" "}
                        <button>
                          <FaWallet className="text-2xl text-slate-800" />
                        </button>{" "}
                      </div>
                      <div>
                        <button>
                          {" "}
                          <FaTrash
                            onClick={() => handleDelete(classItem._id)}
                            className="text-2xl text-red-600"
                          />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
