import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/playerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithId } = useContext(PlayerContext);

  return (
    <>
      <Navbar />
      <div className="mt-10 flex flex-col md:flex-row gap-8 md:items-end px-4 md:px-8">
        <img
          className="w-48 rounded mx-auto md:mx-0"
          src={albumData.image}
          alt={albumData.name}
        />
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-lg">Playlist</p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
            {albumData.name}
          </h2>
          <h4 className="text-md md:text-lg">{albumData.desc}</h4>
          <p className="mt-1 text-sm md:text-base">
            <img
              className="inline-block w-5 relative right-3"
              src={assets.spotify_logo}
              alt="Spotify Logo"
            />
            <b>Spotify</b> . 1,323,154 likes . <b>50 songs, </b>
            about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 px-2 md:px-8 text-[#a7a7a7]">
        <p className="col-span-2 sm:col-span-1">
          <b className="mr-4">#</b>Title
        </p>
        <p className="hidden sm:block">Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="Clock Icon" />
      </div>
      <hr className="mx-2 md:mx-8" />
      {songsData.map((item, index) => (
        <div
          onClick={() => playWithId(item.id)}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer mx-2 md:mx-8"
        >
          <p className="text-white flex items-center col-span-2 sm:col-span-1">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img
              className="inline w-10 mr-5"
              src={item.image}
              alt={item.name}
            />
            {item.name}
          </p>
          <p className="text-[15px] hidden sm:block">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
