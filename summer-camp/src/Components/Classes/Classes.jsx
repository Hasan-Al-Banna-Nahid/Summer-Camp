/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useClasses from "../Hooks/useClasses";
import { AuthContext } from "../Authorization/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Classes = () => {
  const [classes] = useClasses();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleSelect = () => {
    if (user) {
      navigate("/dashboard/myclasses");
    } else {
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
                <img src={classItem.image} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Sport : {classItem.sport}</h2>
                <h2 className="card-title">
                  Instructor : {classItem.instructor}
                </h2>
                <p className="font-bold">Seats : {classItem.availableSeats}</p>
                <p className="font-bold">Price : ${classItem.price}</p>
                <div className="card-actions">
                  <button onClick={handleSelect} className="btn btn-primary">
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
