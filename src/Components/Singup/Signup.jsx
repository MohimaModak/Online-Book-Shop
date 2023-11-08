import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { AiOutlineGoogle } from "react-icons/ai";
import { updateProfile } from "firebase/auth";

const Signup = () => {
  const { creatUser, signInWithGoogle } = useContext(AuthContext);
  // console.log(creatUser);

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const userInfo = { name, email, photo, password };
    console.log(userInfo);

    let condition =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;

    if (!condition.test(password)) {
      Swal.fire("Password is invalid");
    }

    const emailCondition = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailCondition.test(email)) {
      Swal.fire("Email is invalid");
    }

    creatUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          e.target.reset();
          window.location.href = "/";
          return Swal.fire("User Created Successfully");
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        Swal.fire("User Created Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="relative  text-white ">
        <div className="">
          <img
            src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="object-cover w-full h-[610px] "
          />
        </div>
        <div className="absolute flex justify-center items-center inset-0 text-center">
          <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl back border">
                <form
                  onSubmit={handleSignup}
                  className="card-body text-white font-semibold lg:grid grid-cols-2"
                >
                  <div className="form-control ">
                    <label className="label text-white">
                      <span className="label-text text-white">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      className="input input-bordered shadow-2xl  px-1 py-1 rounded-md w-full max-w-xs text-white"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label text-white">
                      <span className="label-text text-white">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      name="email"
                      className="input input-bordered shadow-2xl  px-1 py-1 rounded-md w-full max-w-xs text-white"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label text-white">
                      <span className="label-text text-white">Photo</span>
                    </label>
                    <input
                      type="text"
                      placeholder="photo"
                      name="photo"
                      className="input input-bordered shadow-2xl px-1 py-1 rounded-md w-full max-w-xs text-white"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      name="password"
                      className="input input-bordered text-white"
                      required
                    />
                  </div>
                  <div className="text-center form-control lg:col-span-2 mt-3">
                    <button className="input input-bordered">Sign up</button>
                  </div>

                  <div className="flex justify-center items-center text-center form-control lg:col-span-2 font-bold">
                    Sign in with{" "}
                    <span
                      onClick={handleGoogle}
                      className="text-2xl cursor-pointer text-white "
                    >
                      <AiOutlineGoogle></AiOutlineGoogle>
                    </span>
                  </div>

                  <div className="text-center form-control lg:col-span-2 font-bold p-2">
                    <p className="">
                      Already Have Account Please <br />
                      <Link
                        className="underline uppercase text-white"
                        to={"/signin"}
                      >
                        Sign-In
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
