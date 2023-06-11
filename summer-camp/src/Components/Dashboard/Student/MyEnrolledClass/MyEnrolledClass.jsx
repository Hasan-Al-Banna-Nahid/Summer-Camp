/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Authorization/AuthProvider";
import usePayment from "../../../Hooks/usePayment";

const MyEnrolledClass = () => {
  const [payments] = usePayment();
  const { user } = useContext(AuthContext);
  //   useEffect(() => {
  //     fetch(`http://localhost:5000/payments?email=${user.email}`)
  //       .then((res) => res.json())
  //       .then((data) => setEnrolledClass(data));
  //   }, [user.email]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-2xl font-bold">#</th>
              <th className="text-2xl font-bold">Class Name</th>
              <th className="text-2xl font-bold">Email</th>
              <th className="text-2xl font-bold">Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {payments &&
              payments.map((enrolledClass, index) => {
                return (
                  <tr key={enrolledClass._id}>
                    <th>{index + 1}</th>
                    <th className="font-bold">{enrolledClass.sport}</th>
                    <td className="font-bold">{enrolledClass.email}</td>
                    <td className="font-bold">{enrolledClass.transactionId}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClass;
