import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authorization/AuthProvider";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const handleToggle = () => {
  //   setIsDarkMode((prevMode) => !prevMode);
  // };
  // const darkMode = () => {
  //   document.body.style.backgroundColor = "#2c3e50";
  // };
  // const lightMode = () => {
  //   document.body.style.backgroundColor = "#ECF0F3";
  // };
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Vedhak</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-2xl">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <Link to="/instructors">Instructors</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        {/* <div onClick={handleToggle}>
          {!isDarkMode ? (
            <FaToggleOff className="toggleOff text-2xl" onClick={darkMode} />
          ) : (
            <FaToggleOn className="toggleOn text-2xl" onClick={lightMode} />
          )}
        </div> */}
        <div className="navbar-end">
          {user && user ? (
            <div className="flex">
              <div>
                {" "}
                <img src={user.photoURL} alt="" className="rounded-full" />
              </div>
              <div>
                <button onClick={handleLogOut} className="btn btn-success">
                  LogOut
                </button>
              </div>
            </div>
          ) : (
            <Link to="/signUp">
              {" "}
              <a className="btn">Login</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
