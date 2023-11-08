import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import logo from "../../assets/gallery/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Successfully logged out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bgcolor flex justify-around items-center shadow-2xl md:text-xl font-bold font ">
      <div className="flex gap-3 lg:gap-16 p-3 items-center text-white fontcolor">
        <div>
          <img src={logo} alt="Logo" className="w-14 lg:w-24" />
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

      {user ? (
        <div className="flex justify-center items-center">
          <h1 className="lowercase text-white fontcolor">{user.displayName}</h1>
          <img src={user.photoURL} className="w-10 h-10 p-2 rounded-full" />
          <div
            onClick={handleLogOut}
            className="px-3 py-1 m-10 text-white fontcolor"
          >
            <button>Sign Out</button>
          </div>
        </div>
      ) : (
        <div className="flex ml-2 text-white fontcolor">
          <NavLink
            to="/signin"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            Sign In
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;





// https://eleveen-assignment-project.web.app
