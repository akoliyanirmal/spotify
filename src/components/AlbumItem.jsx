import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-[#ffffff26] transition-all duration-300 rounded-md"
    >
      <img className="w-full h-auto rounded" src={image} alt={name} />
      <p className="font-bold mt-2 mb-1 text-center">{name}</p>
      <p className="text-gray-600 dark:text-slate-200 text-sm text-center">
        {desc}
      </p>
    </div>
  );
};

export default AlbumItem;
