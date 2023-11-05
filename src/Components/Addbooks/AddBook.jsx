import React from "react";
import Marquee from "react-fast-marquee";

const AddBook = () => {
  const handleAddBooks = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const quantity = e.target.quantity.value;
    const author = e.target.author.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const rating = e.target.rating.value;
    const addBooksInfo = {
      name,
      photo,
      quantity,
      author,
      category,
      description,
      rating,
    };
    console.log(addBooksInfo);

    axios.post("http://localhost:5000/novel", data).then((data) => {
      console.log(data.data);
    });

  };

  return (
    <div className="relative">
      <div className=" bg-gray-300 h-[100vh]">
        <div>
          <Marquee speed={100}>
            <div className="absolute  inset-0 "></div>
            <img
              src="https://images.pexels.com/photos/3368816/pexels-photo-3368816.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="h-[300px]"
            />
            <img
              src="https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="h-[300px]"
              srcset=""
            />
            <img
              src="https://images.pexels.com/photos/7171398/pexels-photo-7171398.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="h-[300px]"
              srcset=""
            />
            <img
              src="https://images.pexels.com/photos/4178791/pexels-photo-4178791.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="h-[300px]"
              srcset=""
            />
            <img
              src="https://images.pexels.com/photos/3599208/pexels-photo-3599208.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="h-[300px]"
              srcset=""
            />
            <img
              src="https://images.pexels.com/photos/8058761/pexels-photo-8058761.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="h-[300px]"
              srcset=""
            />
          </Marquee>
        </div>
        <div>
          <Marquee speed={100} direction="right">
            <div className="absolute inset-0 "></div>
            <img
              src="https://images.pexels.com/photos/8276064/pexels-photo-8276064.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="h-[300px]"
            />
            <img
              src="https://images.pexels.com/photos/4996698/pexels-photo-4996698.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="h-[300px]"
              srcset=""
            />
            <img
              src="https://images.pexels.com/photos/4996688/pexels-photo-4996688.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="h-[300px]"
              srcset=""
            />
            <img
              src="https://images.pexels.com/photos/12124032/pexels-photo-12124032.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="h-[300px]"
              srcset=""
            />
            <img
              src="https://images.pexels.com/photos/12004406/pexels-photo-12004406.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="h-[300px]"
              srcset=""
            />
            <img
              src="https://images.pexels.com/photos/7917875/pexels-photo-7917875.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="h-[300px]"
              srcset=""
            />
            <img
              src="https://images.pexels.com/photos/2422178/pexels-photo-2422178.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="h-[300px]"
              srcset=""
            />
          </Marquee>

          <div className=" flex justify-center items-center inset-0 absolute z-50 ">
            <h1 className="text-3xl lg:text-8xl font-extrabold">
              <form
                onSubmit={handleAddBooks}
                className="card-body  font-semibold grid grid-cols-2 background"
              >
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input input-bordered shadow-2xl  px-1 py-1 rounded-md w-full max-w-xs "
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Photo</span>
                  </label>
                  <input
                    type="password"
                    placeholder="photo"
                    name="photo"
                    className="input input-bordered "
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Quantity</span>
                  </label>
                  <input
                    type="password"
                    placeholder="quantity"
                    name="quantity"
                    className="input input-bordered "
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Author Name</span>
                  </label>
                  <input
                    type="password"
                    placeholder="author"
                    name="author"
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
                    className="input input-bordered "
                  >
                    <option value="To Kill a Mockingbird">History</option>
                    <option value="Pride and Prejudice">Mystery</option>
                    <option value="The Great Gatsby">Horror</option>
                    <option value="Moby-Dick">Fantasy</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Description</span>
                  </label>
                  <input
                    type="password"
                    placeholder="description"
                    name="description"
                    className="input input-bordered "
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Rating</span>
                  </label>
                  <input
                    type="password"
                    placeholder="rating"
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
        </div>
      </div>
    </div>
  );
};

export default AddBook;
