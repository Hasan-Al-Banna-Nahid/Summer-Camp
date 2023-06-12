/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageClass = () => {
  const [myClass, setMyClass] = useState([]);
  const [selectedModalId, setSelectedModalId] = useState(null);

  const openModal = (id) => {
    setSelectedModalId(id);
  };

  const closeModal = () => {
    setSelectedModalId(null);
  };

  const handleFeedBack = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const feedback = form.feedback.value;
    console.log(id);
    fetch(
      `https://vedhak-iamnahid591998-gmailcom.vercel.app/instructorsClasses/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(feedback),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Admin Has Sent A FeedBack",
          showConfirmButton: false,
          timer: 1500,
        });
        closeModal();
      });
  };
  const handleDeny = (id) => {
    fetch(
      `https://vedhak-iamnahid591998-gmailcom.vercel.app/instructorsClasses/${id}`,
      { method: "PATCH" }
    )
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
    fetch(
      `https://vedhak-iamnahid591998-gmailcom.vercel.app/instructorsClasses/${id}`,
      { method: "PATCH" }
    )
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
    fetch(
      "https://vedhak-iamnahid591998-gmailcom.vercel.app/instructorsClasses"
    )
      .then((res) => res.json())
      .then((data) => setMyClass(data));
  }, []);
  return (
    <div>
      <div>
        <div>
          <div className="overflow-x-auto">
            <table className="table p-6">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th className="text-[20px]">Image</th>
                  <th className="text-[20px]">Class Name</th>
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
                    <tr key={myClass._id} className="border-4 p-3">
                      <th className="text-[20px]">
                        <label>{index + 1}</label>
                      </th>
                      <td className="text-[20px] border-2">
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
                      <td className="text-[20px] border-2">{myClass.name}</td>
                      <td className="text-[20px]">{myClass.instructor}</td>
                      <td className="text-[20px] border-2">{myClass.email}</td>
                      <td className="text-[20px] border-2">{myClass.seats}</td>
                      <td className="text-[20px] border-2">{myClass.price}</td>
                      <td className="badge badge-secondary badge-outline">
                        {myClass.status}
                      </td>
                      <th className="border-2">
                        <button
                          onClick={() => openModal(myClass._id)}
                          className="btn btn-ghost btn-xs"
                        >
                          Feedback
                        </button>
                        <button
                          onClick={() => handleApproved(myClass._id)}
                          className="btn btn-secondary btn-xs my-3"
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
      {/* Modal */}

      <input
        type="checkbox"
        id={`my-modal-${selectedModalId}`}
        className="modal-toggle"
        checked={selectedModalId !== null}
      />
      {selectedModalId !== null && (
        <>
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor={`my-modal-${selectedModalId}`}
                className="btn btn-sm btn-circle absolute right-2 top-2"
                onClick={closeModal}
              >
                ✕
              </label>
              <form
                onSubmit={(e) => handleFeedBack(e, selectedModalId)}
                className="hero min-h-screen bg-base-200"
              >
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text  font-bold">
                            Tell Why You Approved or Deny the Class{" "}
                          </span>
                        </label>
                        <textarea
                          type="text"
                          placeholder="Feedback"
                          className="input input-bordered"
                          name="feedback"
                        />
                      </div>
                      <button className="w-full btn btn-outline btn-secondary">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
      {/* You can open the modal using ID.showModal() method */}
    </div>
  );
};

export default ManageClass;
