import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import AllBooks from "./Components/AllBooks/AllBooks";
import BorrowedBooks from "./Components/BorrowedBooks/BorrowedBooks";
import AddBook from "./Components/Addbooks/AddBook";
import SignIn from "./Components/SignIn/SignIn";
import Root from "./Components/Root/Root";
import Category from "./Components/Category/Category";
import BookKids from "./Components/BookKids/BookKids";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/allbooks",
        element: <AllBooks />,
      },
      {
        path: "/borrowedbooks",
        element: <BorrowedBooks />,
      },
      {
        path: "/borrowedbooks",
        element: <BorrowedBooks />,
      },
      {
        path: "/addbooks",
        element: <AddBook />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/bookKids/:category",
        element: <BookKids />,
        loader: ({ params }) =>
          fetch(`http://localhost:2000/kids/${params.category}`),
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
