import React, { useContext } from "react";
import { PlayerContext } from "../context/playerContext";

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] sm:min-w-[220px] md:min-w-[260px] lg:min-w-[300px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] flex flex-col items-center"
    >
      <img
        className="rounded w-full h-auto object-cover"
        src={image}
        alt={name}
      />
      <p className="font-bold mt-2 mb-1 text-center text-base sm:text-lg md:text-xl">
        {name}
      </p>
      <p className="text-slate-200 text-sm sm:text-base md:text-lg text-center">
        {desc}
      </p>
    </div>
  );
};

export default SongItem;
