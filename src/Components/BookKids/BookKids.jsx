import { Rating } from "@mui/material";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./BookKids.css";

const BookKids = () => {
  const bookKidsLoader = useLoaderData();
  console.log(bookKidsLoader);
  return (
    <div className="flex justify-center items-center bannerfont">
      <div className="m-5">
        {bookKidsLoader.map((kids) => (
          <div className=" md:flex justify-center items-center shadow-2xl border m-5 rounded-md">
            <div className="flex justify-center items-center ">
              <img
                src={kids.photo}
                className="md:w-[600px] h-[300px] rounded-l-md"
              />
            </div>

            <div className="flex  justify-center items-center text-center p-3 md:w-2/3 md:text-left pl-5 ">
              <div className="">
                <h1 className="font-bold md:text-4xl">{kids.name}</h1>
                <h1 className="font-semibold">Quantity: {kids.quantity}</h1>
                <h1 className="font-semibold">category: {kids.category}</h1>
                <h1 className="font-semibold">Author Name: {kids.author}</h1>

                <h1 className="font-medium">{kids.description}</h1>
                <div className="font-semibold">
                  <h1>Rating: {kids.rating}</h1>
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </div>
                
                <Link to={`/details/${kids._id}`}>
                  <div className="text-center border p-2 max-w-min bg-gray-100 rounded-md font-bold">
                    <button>Details</button>
                  </div>
                </Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookKids;
