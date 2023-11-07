import React from "react";
import "./Home.css";
import Category from "../Category/Category";
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";
import { useEffect } from "react";
import { useState } from "react";
import { BsLightbulb, BsLightbulbOff } from "react-icons/bs";

const Home = () => {
  const [darkLight, setdarkLight] = useState(
    localStorage.getItem("darkLight") === "true"
  );

  const toggleBackground = () => {
    setdarkLight((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem("darkLight", newTheme.toString());
      return newTheme;
    });
  };

  useEffect(() => {
    localStorage.setItem("darkLight", darkLight.toString());
  }, [darkLight]);

  const backgroundColor = darkLight ? "black" : "white";
  const textColor = darkLight ? "white" : "black";

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <div className="relative">
        <div className="">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="video object-cover h-[85vh]"
          >
            <source src="/src/assets/Gallery/hom.mp4" className="video " />
          </video>
          {/* <div className="overlay"></div> */}
        </div>
        <div className="absolute flex justify-center inset-0 items-center text-white">
          <div className="background max-w-md p-5 rounded-md bannerfont">
            <div className="flex justify-center items-center mb-3">
              <button
                className="text-3xl pl-5 pt-5 z-50"
                onClick={toggleBackground}
              >
                {darkLight ? (
                  <BsLightbulb></BsLightbulb>
                ) : (
                  <BsLightbulbOff></BsLightbulbOff>
                )}
              </button>
            </div>

            <h1 className="text-5xl text-center">Online Library</h1>
            <div className="flex justify-center">
              <p className="text-center p-3 text-sm">
                A library is a place where books and sources of information are
                stored. They make it easier for people to get access to them for
                various purposes.
              </p>
            </div>
            <div className="flex justify-center text-sm">
              <p className="text-center border px-2 py-2 uppercase rounded-md">
                Buy Now
              </p>
            </div>
          </div>
        </div>
      </div>
      <Category></Category>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
    </div>
  );
};

export default Home;
