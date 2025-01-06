import { useContext, useState } from "react";
import { UtilitiContext } from "../Context/UtilitiesProvider";
import reviewImg from "../assets/review2.jpg";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router";

const Review = () => {
  const { theme } = useContext(UtilitiContext);
  const [rating, setRating] = useState(0);
  const date = new Date();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  const reviewHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const description = form.description.value;

    if (rating === 0) {
      Swal.fire({
        title: "Please Give Rating!",
        icon: "info",
        draggable: true,
      });
      return;
    }

    const review = {
      name,
      email,
      description,
      rating,
      date,
    };

    await axios.post(`https://crowd-nest-server-eight.vercel.app/review`, review).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Review Added SuccessFully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/')
    });
  };

  return (
    <div className="p-2 md:p-6 py-10 md:py-20 flex justify-center items-center">
      <div
        className={`container flex flex-col lg:flex-row gap-8 rounded-lg p-4 md:p-8 lg:p-16 mx-auto ${
          theme ? "bg-white" : "bg-gray-900"
        }`}
      >
        {/* image */}
        <div className="lg:w-1/2">
          <img
            src={reviewImg}
            alt=""
            className="w-full rounded-lg h-full object-cover"
          />
        </div>
        {/* form */}
        <div className="lg:w-1/2">
          <form onSubmit={reviewHandler} className="flex flex-col gap-6">
            {/* name and Email */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className={`${theme ? "label-text" : "text-white"}`}>
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  placeholder="Enter Your Name"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              {/* email */}
              <div className="form-control w-full">
                <label className="label">
                  <span className={`${theme ? "label-text" : "text-white"}`}>
                    Email
                  </span>
                </label>
                <input
                  type="text"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="Enter your Email"
                  className="input input-bordered text-black"
                  required
                />
              </div>
            </div>
            {/* description */}
            <div className="form-control w-full">
              <label className="label">
                <span className={`${theme ? "label-text" : "text-white"}`}>
                  Description
                </span>
              </label>
              <textarea
                name="description"
                className="textarea text-black textarea-bordered resize-none"
                placeholder="Description"
                required
              ></textarea>
            </div>
            {/* rating */}
            <div className="flex justify-center items-center p-4 md:p-8">
              <p className="text-center ">
                <Rating
                  style={{ maxWidth: 250 }}
                  value={rating}
                  onChange={setRating}
                  isRequired
                />
              </p>
            </div>
            <div className="flex justify-center items-center py-10">
              <input
                type="submit"
                value="Give Review"
                className="bg-[#ff5103] cursor-pointer py-3 px-6 w-full rounded-full font-bold text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
