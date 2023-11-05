import React from "react";
import { useLoaderData } from "react-router-dom";

const BookKids = () => {
  const bookKidsLoader = useLoaderData();
  console.log(bookKidsLoader);
  return (
    <div className="flex justify-center items-center">
      <h1>{bookKidsLoader.length}</h1>
      <div className="grid grid-cols-2 gap-5 m-16">
        {bookKidsLoader.map((kids) => (
          <div className="border">
            <div className="flex justify-center items-center">
              <img src={kids.photo} className="" />
            </div>

            <div className="text-center">
              <h1>{kids.name}</h1>
              <h1>Quantity: {kids.quantity}</h1>
              <h1>category: {kids.category}</h1>
              <h1>Author Name: {kids.author}</h1>
              <div>
                <h1>{kids.rating}</h1>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
              <h1>{kids.description}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookKids;
