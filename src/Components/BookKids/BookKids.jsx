import React from "react";
import { useLoaderData } from "react-router-dom";

const BookKids = () => {
  const bookKidsLoader = useLoaderData();
  console.log(bookKidsLoader);
  return (
    <div>
      <h1>{bookKidsLoader.length}</h1>
      <div className="grid grid-cols-2">
        {bookKidsLoader.map((kids) => (
          <div className="border">
            <div>
              <img src={kids.photo} alt="" />
            </div>

            <div>
              {kids.name}
              {kids.quantity}
              {kids.author}
              {kids.quantity}
              {kids.description}
              {kids.rating}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookKids;
