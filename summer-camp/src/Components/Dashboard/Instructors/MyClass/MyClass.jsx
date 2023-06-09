import React, { useEffect, useState } from "react";

const MyClass = () => {
  const [myClass, setMyClass] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructorsClasses")
      .then((res) => res.json())
      .then((data) => setMyClass(data));
  }, []);
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
                    <th>
                      <label>{index + 1}</label>
                    </th>
                    <td>
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

                    <td>{myClass.instructor}</td>
                    <td>{myClass.email}</td>
                    <td>{myClass.seats}</td>
                    <td>{myClass.price}</td>
                    <td className="badge badge-secondary badge-outline">
                      {myClass.status}
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-xs">Update</button>
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
