import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar for large screens */}
      <div className="hidden lg:flex lg:w-[25%] w-full lg:h-full h-auto p-2 flex-col gap-2 text-white">
        <div className="bg-[#121212] lg:h-[15%] h-auto rounded flex flex-col justify-around">
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 pl-8 cursor-pointer"
          >
            <img className="w-6" src={assets.home_icon} alt="Home Icon" />
            <p className="font-bold">Home</p>
          </div>
          <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <img className="w-6" src={assets.search_icon} alt="Search Icon" />
            <p className="font-bold">Search</p>
          </div>
        </div>
        <div className="bg-[#121212] lg:h-[85%] h-auto rounded">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img className="w-8" src={assets.stack_icon} alt="Stack Icon" />
              <p className="font-semibold">Your Library</p>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
              <img className="w-5" src={assets.plus_icon} alt="Plus Icon" />
            </div>
          </div>
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-center justify-start gap-1 pl-4">
            <h1>Create your first playlist</h1>
            <p className="font-light">It's easy, we will help you</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
              Create Playlist
            </button>
          </div>
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-center justify-start gap-1 pl-4 mt-4">
            <h1>Let's find some podcasts to follow</h1>
            <p className="font-light">We'll keep you updated on new episodes</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
              Browse Podcasts
            </button>
          </div>
        </div>
      </div>

      {/* Toggle button for mobile screens */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleSidebar}
          className="bg-[#121212] text-white p-2 rounded-full"
        >
          {isSidebarOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Sidebar for mobile screens */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-[#121212] p-2 text-white z-40">
          <div className="flex flex-col gap-2">
            <div
              onClick={() => {
                navigate("/");
                toggleSidebar();
              }}
              className="flex items-center gap-3 pl-4 cursor-pointer"
            >
              <img className="w-6" src={assets.home_icon} alt="Home Icon" />
              <p className="font-bold">Home</p>
            </div>
            <div className="flex items-center gap-3 pl-4 cursor-pointer">
              <img className="w-6" src={assets.search_icon} alt="Search Icon" />
              <p className="font-bold">Search</p>
            </div>
            <div className="flex items-center gap-3 pl-4 cursor-pointer">
              <img className="w-8" src={assets.stack_icon} alt="Stack Icon" />
              <p className="font-semibold">Your Library</p>
            </div>
            <div className="flex items-center gap-3 pl-4 cursor-pointer">
              <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
              <img className="w-5" src={assets.plus_icon} alt="Plus Icon" />
            </div>
            <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-center justify-start gap-1 pl-4">
              <h1>Create your first playlist</h1>
              <p className="font-light">It's easy, we will help you</p>
              <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
                Create Playlist
              </button>
            </div>
            <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-center justify-start gap-1 pl-4 mt-4">
              <h1>Let's find some podcasts to follow</h1>
              <p className="font-light">
                We'll keep you updated on new episodes
              </p>
              <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
                Browse Podcasts
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
