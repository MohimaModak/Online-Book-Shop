import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import video from "../../assets/gallery/update.mp4";

const Update = () => {
  const updateBooks = useLoaderData();
  console.log(updateBooks);

  const { _id, name, photo, author, rating, category } = updateBooks;

  const [formVisibility, setFormVisibility] = useState(false);

  const toggleForm = () => {
    setFormVisibility(!formVisibility);
  };

  const handleAddBooks = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const author = e.target.author.value;
    const category = e.target.category.value;
    const rating = e.target.rating.value;
    const updateBooksInfo = {
      name,
      photo,
      author,
      category,
      rating,
    };
    console.log(updateBooksInfo);

    fetch(`https://eleveen-server-assignment.vercel.app/bookupdate/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateBooksInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Wow",
            text: "Successfully updated",
            confirmButtonText: "Okay",
          });
        }
      });
  };

  return (
    <div>
      <div className="video-container relative">
        <div>
          <video autoPlay loop muted playsInline className="video">
            <source src={video} className="video " />
          </video>
          <div className="overlay"></div>
        </div>

        <div className="absolute justify-center flex items-center inset-0 text-center">
          <div className=" text-white z-[1000]">
            {formVisibility ? (
              <div className="text-center md:text-4xl font-bold ">
                Make You Best Choice
              </div>
            ) : (
              <div>
                <h1 className="text-center text-2xl md:text-6xl font-bold mb-5">
                  Creativity
                </h1>
                <div>
                  <h1 className="lg:text-xl">
                    {" "}
                    It may sound obvious, but practice is essential for
                    creativity.Discover Quality in Quantity. <br /> Creativity
                    is not about perfection.{" "}
                  </h1>
                </div>
              </div>
            )}
            {formVisibility ? (
              <div>
                <button
                  onClick={toggleForm}
                  className="opacity background border px-2 py-1 mt-5 rounded-md"
                >
                  <AiOutlineClose></AiOutlineClose>
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={toggleForm}
                  className="opacity background border px-2 py-1 mt-5 rounded-md"
                >
                  Update
                </button>
              </div>
            )}

            {formVisibility && (
              <div>
                <h1 className="lg:text-8xl font-extrabold">
                  <form
                    onSubmit={handleAddBooks}
                    className="card-body font-semibold grid grid-cols-2 background"
                  >
                    <div className="form-control">
                      <label className="label ">
                        <span className="label-text text-white">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="name"
                        name="name"
                        defaultValue={name}
                        className="input input-bordered shadow-2xl  px-1 py-1 rounded-md w-full max-w-xs "
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">Photo</span>
                      </label>
                      <input
                        type="text"
                        placeholder="photo"
                        name="photo"
                        defaultValue={photo}
                        className="input input-bordered "
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">
                          Author Name
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="author"
                        name="author"
                        defaultValue={author}
                        className="input input-bordered "
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">Category</span>
                      </label>
                      <select
                        id="novelSelect"
                        name="category"
                        className="input input-bordered text-black"
                      >
                        <option value="History">History</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Horror">Horror</option>
                        <option value="Fantasy">Fantasy</option>
                      </select>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">Rating</span>
                      </label>
                      <input
                        type="text"
                        placeholder="rating"
                        defaultValue={rating}
                        name="rating"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">Submit</span>
                      </label>
                      <input
                        className="input input-bordered"
                        type="submit"
                        value="Submit"
                      />
                    </div>

                    <div></div>
                  </form>
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
