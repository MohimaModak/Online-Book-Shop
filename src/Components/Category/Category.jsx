import React, { useEffect, useState } from "react";
import "./Category.css";
import { Link } from "react-router-dom";
const Category = () => {
  const [category, setcategory] = useState([]);

  useEffect(() => {
    fetch("https://eleveen-server-assignment.vercel.app/book")
      .then((res) => res.json())
      .then((data) => setcategory(data));
  }, []);

  return (
    <div className="bgcolor fontcolor text-white">
      <h1 className="text-5xl font-semibold text-center p-16">
        Knowledge Category
      </h1>

      <div className="flex justify-center items-center">
        <p className="text-center w-2/3 font-medium text-base">
          {" "}
          This classroom reading nook is right next to the classroom library.
          The teepee tent is decorated with a rainbow pom-pom garland and throw
          pillows. Classroom reading nooks are fun to create and it is so worth
          it for your students to have a comfortable and inviting space to read.
        </p>
      </div>

      <div className="flex justify-center items-center font ">
        <div key={category.id} className="grid lg:grid-cols-2 gap-16  m-10">
          {category.map((books) => (
            <div className="contact rounded-md relative">
              <img
                src={books.image}
                alt=""
                srcset=""
                className="w-[100%] h-[80vh]"
              />

              <div className="contact-body w-[100%] h-[100%] absolute top-0 right-[-100%] backdrop-blur-sm text-left text-white">
                <div className="flex justify-center items-center inset-0 h-[100vh] md:h-[80vh]">
                  <div className="p-6">
                    <h1 className="text-center lg:text-4xl font">
                      {books.category}
                    </h1>
                    <Link to={`/bookKids/${books.category}`}>
                      <button className="border w-full mt-5 rounded-3xl p-2">
                        {books.button}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
