import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const BorrowedBooks = () => {
  const [cart, setcart] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:2000/borrowProduct/${user.email}`)
      .then((res) => res.json())
      .then((data) => setcart(data));
  }, []);

  return (
    <div className="flex justify-center items-center m-10">
      <div className="grid md:grid-cols-3 gap-10">
        {cart.map((bookCart) => (
          <div className="border rounded-md shadow-2xl ">
            <div>
              <img src={bookCart.photo} className="rounded-t-md" />
            </div>
            <div className="p-3 font-bold">
              <h1 className="text-xl pb-2">Name: {bookCart.name}</h1>
              <h1>Borrowed Date: {bookCart.date}</h1>
              <h1>Category: {bookCart.category}</h1>
              <h1>Quantity: {bookCart.quantity}</h1>
              <div className="bg-gray-200 p-1 mt-3 w-full rounded-full text-center">
                <button className="uppercase">Return Button</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
