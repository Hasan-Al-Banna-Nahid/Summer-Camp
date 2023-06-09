/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Authorization/AuthProvider";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const { user } = useContext(AuthContext);

  const handleInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is Instructor Now`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const handleAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, { method: "PATCH" })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is Admin Now`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  console.log(users);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-2xl font-bold">#</th>
              <th className="text-2xl font-bold">Name</th>
              <th className="text-2xl font-bold">Role</th>
              <th className="text-2xl font-bold"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={user._id}>
                  <th className="text-2xl">{index + 1}</th>
                  <td className="text-2xl">{user.name}</td>
                  <td className="text-2xl">{user.role}</td>
                  <td className="text-2xl">
                    <div className="flex gap-4">
                      <div>
                        <button
                          className="btn btn-outline btn-secondary"
                          disabled={user.role === "instructor"}
                          onClick={() => handleInstructor(user)}
                        >
                          Make Instructor
                        </button>
                      </div>
                      <div>
                        <button
                          disabled={user.role === "admin"}
                          onClick={() => handleAdmin(user)}
                          className="btn btn-outline btn-primary"
                        >
                          {" "}
                          Make Admin
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

export default AllUsers;
