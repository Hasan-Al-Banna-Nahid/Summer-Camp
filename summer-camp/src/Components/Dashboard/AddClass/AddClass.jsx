/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../Authorization/AuthProvider";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const instructor = form.instructor.value;
    const email = form.email.value;
    const status = form.status.value;
    const seats = parseInt(form.seats.value);
    const price = parseInt(form.price.value);
    const data = { name, image, instructor, email, seats, price, status };
    fetch("http://localhost:5000/instructorsClasses", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Class Is Added",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl">Class Name</h2>
            <input
              type="text"
              name="name"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <h2 className="text-2xl">Class Image</h2>
            <input
              type="text"
              name="image"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <h2 className="text-2xl">Instructor Name</h2>
            <input
              type="text"
              name="instructor"
              value={user?.displayName}
              readOnly
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <h2 className="text-2xl">Instructor Email</h2>
            <input
              type="text"
              name="email"
              readOnly
              value={user?.email}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <h2 className="text-2xl">Available Seats</h2>
            <input
              type="number"
              name="seats"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <h2 className="text-2xl">Price</h2>
            <input
              type="number"
              name="price"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <h2 className="text-2xl">Status</h2>
            <input
              type="text"
              name="status"
              readOnly
              value={"Pending"}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <button className="mx-auto btn btn-outline btn-primary my-6 w-full">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddClass;