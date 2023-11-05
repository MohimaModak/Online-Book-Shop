import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="bgcolor flex justify-around items-center shadow-2xl md:text-xl font-bold font ">
      <div className="flex gap-3 lg:gap-16 p-3 items-center text-white fontcolor">
        <div>
          <img src="/src/assets/gallery/logo.png" alt="Logo" className="w-14 lg:w-24" />
        </div>
        <div>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/addbooks"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            Add-Books
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/allbooks"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            All-Books
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/borrowedbooks"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            Borrowed-Books
          </NavLink>
        </div>
      </div>

      <div className="ml-2 text-white fontcolor">
        <NavLink
          to="/signin"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Sign-in
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
