import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[100vh] text-center bg-gray-200">
        <div className="bg-gray-50 p-10 rounded-sm">
          <h1 className="text-6xl text-red-700 font-bold">404</h1>
          <p className="text-red-700 font-semibold text-3xl mt-3">
            This page is not found
          </p>
          <div className="flex justify-center items-center m-5">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/266/204/non_2x/vector-cartoon-computer-with-error-message.jpg"
              className="w-2/3"
            />
          </div>

          <button className="bg-red-700 text-white py-2 px-2 text-base rounded-full mt-6 font-semibold">
            <Link to={"/"}>Back To Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
