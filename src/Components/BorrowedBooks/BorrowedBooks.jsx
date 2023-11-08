import React, { useContext } from "react";
// import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
  const [cart, setcart] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://eleveen-server-assignment.vercel.app/borrowProduct/${user.email}`)
      .then((res) => res.json())
      .then((data) => setcart(data));
  }, []);

  const handleDelete = (name) => {
    console.log("name", name);
    Swal.fire({
      title:
        "Are you sure to return it if you return it will be deleted from the borrowed books route",
      confirmButtonText: "Yes, I want",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://eleveen-server-assignment.vercel.app/borrowProduct/${name}`,{
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Completed your Return and Deleted Processing",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="flex justify-center items-center m-10">
      <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-10">
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
                <button
                  onClick={() => handleDelete(bookCart.name)}
                  className="uppercase"
                >
                  Return Button
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
