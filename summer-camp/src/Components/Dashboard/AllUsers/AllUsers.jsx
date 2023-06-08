/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../Authorization/AuthProvider";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const { user } = useContext(AuthContext);
  const handleAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, { method: "PATCH" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
      .then((data) => setUsers(data));
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
                    <button
                      disabled={user.role === "admin"}
                      onClick={() => handleAdmin(user)}
                    >
                      {" "}
                      <FaUserShield />
                    </button>
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
