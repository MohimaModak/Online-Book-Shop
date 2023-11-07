import { Rating } from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router-dom";

const AllBooks = () => {
  const allBooks = useLoaderData();
  console.log(allBooks);
  return (
    <div>
      <h1 className="font-bold text-4xl m-5 text-center">All Books</h1>
      <div className="flex justify-center items-center text-center">
        <p className="w-2/3 text-base font-semibold">
          What is a Special Library? Special libraries, sometimes referred to as
          “information centers”, are libraries that provide specialized
          information resources on a particular subject, serve a specialized and
          limited clientele, and deliver specialized services to that clientele.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="md:grid-cols-2 grid lg:grid-cols-3 gap-5 m-10">
          {allBooks.map((everybooks) => (
            <div className="shadow-2xl border rounded-md">
              <img
                src={everybooks.photo}
                className="h-[300px] w-96 rounded-t-md"
              />
              <div className="p-5">
                <h1 className="font-bold text-xl">Name: {everybooks.name}</h1>
                <h1 className="font-semibold text-lg">
                  Author Name: {everybooks.author}
                </h1>
                <h1 className="font-semibold text-lg">
                  Category: {everybooks.category}
                </h1>
                <div className="font-semibold text-lg">
                  <h1>Rating: {everybooks.rating}</h1>
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
