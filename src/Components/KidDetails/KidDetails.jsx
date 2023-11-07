import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const KidDetails = () => {
  const { user } = useContext(AuthContext);
  const detailsLoader = useLoaderData();
  console.log(detailsLoader);
  const [showmodal, setShowmodal] = useState(false);

  const handleBorrow = () => {
    setShowmodal(true);
  };

  const handleBorrowInfo = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const date = e.target.date.value;
    const borrowUserInfo = { email, name, date, ...detailsLoader };
    console.log(borrowUserInfo);
    axios.post("http://localhost:2000/borrow", borrowUserInfo).then((data) => {
      console.log(data.data);
      setShowmodal(false);
    });

    axios
      .post("http://localhost:2000/borrowProduct", {
        email: user.email,
        date: borrowUserInfo.date,
        name: detailsLoader.name,
        category: detailsLoader.category,
        photo: detailsLoader.photo,
        quantity: detailsLoader.quantity,
        id: detailsLoader._id,
      })
      .then((data) => {
        console.log(data.data);
      });
  };

  return (
    <div className="flex justify-center items-center m-16">
      <div className="border p-5 rounded-md shadow-2xl">
        <div>
          <img src={detailsLoader.photo} className="rounded-t-md w-96" />
        </div>
        <div className="border p-5 rounded-b-md text-center bg-slate-100">
          <h1 className="font-bold text-2xl">Name: {detailsLoader.name}</h1>
          <h1 className="font-bold">Category: {detailsLoader.category}</h1>
          <h1 className="font-bold">Quantity: {detailsLoader.quantity}</h1>
          <div className="flex justify-center gap-5 m-3">
            <div onClick={handleBorrow} className="px-2 font-bold">
              <button
                className="btn bg-white font-bold text-base"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Borrow
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  {showmodal && (
                    <form onSubmit={handleBorrowInfo}>
                      <div>
                        <label>Email: </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={user.email}
                          // value={email}
                        />
                      </div>
                      <div>
                        <label>Name: </label>
                        <input
                          type="name"
                          id="name"
                          name="name"
                          value={user.displayName}
                        />
                      </div>
                      <div>
                        <label>Return Date: </label>
                        <input type="date" id="date" name="date" />
                      </div>
                      <div>
                        <input type="Submit" value="Submit" />
                      </div>
                      <button onClick={() => setShowmodal(false)}>Close</button>
                    </form>
                  )}
                </div>
              </dialog>
            </div>
            <Link to={`/read/${detailsLoader._id}`}>
              <div className="btn bg-white py-2 text-lg font-bold">
                <button>Read</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidDetails;
