/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../../Authorization/AuthProvider";
import Swal from "sweetalert2";

const AddClass = () => {
  const imageToken = import.meta.env.VITE_Image_Token;
  console.log(imageToken);
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const instructor = form.instructor.value;
    const email = form.email.value;
    const status = form.status.value;
    const feedback = form.feedback.value;
    const seats = parseInt(form.seats.value);
    const price = parseInt(form.price.value);
    const enrolled = parseInt(form.enrolled.value);
    const data = {
      name,
      instructor,
      email,
      seats,
      price,
      status,
      feedback,
      enrolled,
    };
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
    const formData = new FormData();
    formData.append("image", form.image.files[0]);
    console.log(form.image.files);
    fetch(imageHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {});
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-3 gap-6">
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
              type="file"
              name="image"
              placeholder="Type here"
              className="input btn btn-primary input-bordered w-full max-w-xs"
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
          <div>
            <h2 className="text-2xl">Feedback</h2>
            <input
              type="text"
              name="feedback"
              readOnly
              value={"No FeedBack Yet"}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <h2 className="text-2xl">Total Enrolled Students</h2>
            <input
              type="number"
              name="enrolled"
              readOnly
              value={0}
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
