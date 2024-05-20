import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/playerContext";

const Player = () => {
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-black flex flex-col lg:flex-row justify-between items-center text-white px-4  lg:py-0">
      <div className="flex items-center gap-4 mb-2 lg:mb-0 lg:order-1">
        <img className="w-12" src={track.image} alt={track.name} />
        <div>
          <p className="text-sm lg:text-base">{track.name}</p>
          <p className="text-xs lg:text-sm">{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 order-3 lg:order-2 m-auto">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt="Shuffle"
          />

          <img
            onClick={previous}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt="Previous"
          />

          {playStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt="Pause"
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt="Play"
            />
          )}

          <img
            onClick={next}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt="Next"
          />

          <img
            className="w-4 cursor-pointer"
            src={assets.loop_icon}
            alt="Loop"
          />
        </div>

        <div className="flex items-center gap-5 w-full max-w-lg">
          <p className="text-xs lg:text-sm">
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="flex-1  w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer relative h-2"
          >
            <div
              ref={seekBar}
              className="h-full w-0 bg-green-800 absolute top-0 left-0 rounded-full"
            ></div>
          </div>
          <p className="text-xs lg:text-sm">
            {time.TotalTime.minute}:{time.TotalTime.second}
          </p>
        </div>
      </div>

      <div className=" items-center gap-2 opacity-75 order-2 lg:order-3 lg:flex hidden">
        <img className="w-4" src={assets.plays_icon} alt="Plays" />

        <img className="w-4" src={assets.mic_icon} alt="Mic" />

        <img className="w-4" src={assets.queue_icon} alt="Queue" />

        <img className="w-4" src={assets.speaker_icon} alt="Speaker" />

        <img className="w-4" src={assets.volume_icon} alt="Volume" />
        <div className="w-20 bg-slate-50 h-1 rounded"></div>

        <img className="w-4" src={assets.mini_player_icon} alt="Mini Player" />

        <img className="w-4" src={assets.zoom_icon} alt="Zoom" />
      </div>
    </div>
  );
};

export default Player;
