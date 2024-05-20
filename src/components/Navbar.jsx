import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-between items-center font-semibold px-4 py-2">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="Go Back"
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="Go Forward"
          />
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl cursor-pointer hidden md:block">
            Explore Premium
          </p>
          <p className="bg-black text-white py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            N
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-4 px-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">
          Music
        </p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;
