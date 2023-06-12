/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AuthContext } from "../Authorization/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import usePaymentTransactionId from "../Hooks/usePaymentTransactionId";

const MySwal = withReactContent(Swal);

const Classes = () => {
  // const [classes] = useClasses();
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { user } = useContext(AuthContext);
  // const { payment } = usePaymentTransactionId();
  // console.log(payment);
  // console.log(payments.map((payment) => payment.transactionId));

  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(
      "https://vedhak-iamnahid591998-gmailcom.vercel.app/instructorsClasses"
    )
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  const sendDataToBackend = (classItem) => {
    const data = {
      sport: classItem.name,
      instructor: classItem.instructor,
      availableSeats: classItem.seats,
      price: classItem.price,
      addedBy: user.email,
    };
    fetch(
      `https://vedhak-iamnahid591998-gmailcom.vercel.app/classes?email=${user.email}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: localStorage.getItem("access-token"),
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Class Is Added",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const handleSelect = () => {
    if (!user) {
      Swal.fire({
        title: "You Have To Login First?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
  return (
    <div>
      <Header />
      <h2 className="text-3xl font-bold text-center my-8">Classes</h2>
      <div className="grid md:grid-cols-3">
        {classes.map((classItem, index) => {
          return (
            <div
              key={index}
              className="card w-96 h-[450px] bg-base-100 shadow-xl"
            >
              <figure className="px-10 pt-10">
                <img
                  src={classItem.image}
                  alt={classItem.name}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Sport : {classItem.name}</h2>
                <h2 className="card-title">
                  Instructor : {classItem.instructor}
                </h2>
                <p className="font-bold">Seats : {classItem.seats}</p>
                <p className="font-bold">Price : ${classItem.price}</p>
                <p className="font-bold">
                  Enrolled Students : ${classItem.enrolled}
                </p>
                <p className="font-bold">
                  Available Seats : ${classItem.seats}
                </p>
                <div className="card-actions">
                  <button
                    disabled={classItem.availableSeats === 0}
                    onClick={() => {
                      handleSelect();
                      sendDataToBackend(classItem);
                    }}
                    className="btn btn-primary"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Classes;
