/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaWallet, FaSchool, FaDoorOpen } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import { AuthContext } from "../Authorization/AuthProvider";
import axios from "axios";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  const [isInstructor] = useInstructor();

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200  text-xl text-base-content">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <Link to="/dashboard">
                    <FaHome />
                    Admin Home
                  </Link>
                </li>
                <li>
                  <Link to="allUsers">All Users</Link>
                </li>
                <div className="divider"></div>
                <li>
                  <Link to="/">
                    <FaHome />
                    Home
                  </Link>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <Link to="/dashboard">
                    <FaHome />
                    Instructor Home
                  </Link>
                </li>
                <li>
                  <Link>Add Class</Link>
                </li>
                <div className="divider"></div>
                <li>
                  <Link to="/">
                    <FaHome />
                    Home
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard">
                    <FaHome />
                    Student Home
                  </Link>
                </li>
                <li>
                  <Link to="myclasses">
                    <FaSchool />
                    My Classes
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaDoorOpen />
                    My Enrolled Classes
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaWallet />
                    Payment
                  </Link>
                </li>
                <div className="divider"></div>
                <li>
                  <Link to="/">
                    <FaHome />
                    Home
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
