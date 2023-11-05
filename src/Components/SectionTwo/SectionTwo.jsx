import React from "react";

const SectionTwo = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-3">
        <div className="m-10">
          <img
            src="https://s26162.pcdn.co/wp-content/uploads/2017/10/the-ritual.jpg"
            className="w-96 h-[550px] rounded-md"
          />
          <div className=" p-2 mt-5 max-w-md bg-sky-500 text-white rounded-md text-center flex justify-center items-center">
            <button className="text-center" onClick={window.print}>
              Free PDF
            </button>
          </div>
        </div>
        <div className="m-10">
          <img
            src="https://www.creativeparamita.com/wp-content/uploads/2023/03/Shadows-of-the-Past.jpg"
            className="w-96 h-[550px] rounded-md"
          />
          <div className=" p-2 mt-5 max-w-md bg-sky-500 text-white rounded-md text-center flex justify-center items-center">
            <button className="text-center" onClick={window.print}>
              Free PDF
            </button>
          </div>
        </div>
        <div className="m-10">
          <img
            src="https://images-platform.99static.com//EjnwZyyjcheConP0oniaMNOTtQs=/fit-in/500x500/99designs-contests-attachments/75/75941/attachment_75941258"
            className="w-96 h-[550px] rounded-md"
          />
          <div className=" p-2 mt-5 max-w-md bg-sky-500 text-white rounded-md text-center flex justify-center items-center">
            <button className="text-center" onClick={window.print}>
              Free PDF
            </button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3">
        <div className="m-10">
          <img
            src="https://i.pinimg.com/736x/84/0c/e2/840ce2c7eec577b58006ae49efab95aa.jpg"
            className="w-96 h-[550px] rounded-md"
          />
          <div className=" p-2 mt-5 max-w-md bg-sky-500 text-white rounded-md text-center flex justify-center items-center">
            <button className="text-center" onClick={window.print}>
              Free PDF
            </button>
          </div>
        </div>
        <div className="m-10">
          <img
            src="https://m.media-amazon.com/images/I/716CqYcLakL._AC_UF1000,1000_QL80_.jpg"
            className="w-96 h-[550px] rounded-md"
          />
          <div className=" p-2 mt-5 max-w-md bg-sky-500 text-white rounded-md text-center flex justify-center items-center">
            <button className="text-center" onClick={window.print}>
              Free PDF
            </button>
          </div>
        </div>
        <div className="m-10">
          <img
            src="https://www.creativeparamita.com/wp-content/uploads/2023/03/The-Shadows-in-the-Attic.jpg"
            className="w-96 h-[550px] rounded-md"
          />
          <div className=" p-2 mt-5 max-w-md bg-sky-500 text-white rounded-md text-center flex justify-center items-center">
            <button className="text-center" onClick={window.print}>
              Free PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
