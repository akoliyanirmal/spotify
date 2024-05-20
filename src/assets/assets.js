import bell_icon from "./bell.png";
import home_icon from "./home.png";
import like_icon from "./like.png";
import loop_icon from "./loop.png";
import mic_icon from "./mic.png";
import next_icon from "./next.png";
import play_icon from "./play.png";
import pause_icon from "./pause.png";
import plays_icon from "./plays.png";
import prev_icon from "./prev.png";
import search_icon from "./search.png";
import shuffle_icon from "./shuffle.png";
import speaker_icon from "./speaker.png";
import stack_icon from "./stack.png";
import zoom_icon from "./zoom.png";
import plus_icon from "./plus.png";
import arrow_icon from "./arrow.png";
import mini_player_icon from "./mini-player.png";
import queue_icon from "./queue.png";
import volume_icon from "./volume.png";
import arrow_right from "./right_arrow.png";
import arrow_left from "./left_arrow.png";
import spotify_logo from "./spotify_logo.png";
import clock_icon from "./clock_icon.png";

import mahhhi from "./mahhhi.jpg";

import born from "./born.jpg";

import dooriyaan from "./dooriyaan.jpeg";

import fir from "./fir.jpg";

import sunday from "./sunday.jpg";

import wishes from "./wishes.jpeg";

import rubi from "./rubi.jpeg";

import summertime from "./summertime.jpeg";

import tuhai from "./tuhai.jpeg";

import sangrahiyo from "./sangrahiyo.jpeg";

import dil from "./dil.jpg";

import king from "./king.jpg";

import qissa from "./qissa.jpg";

import bollywood from "./bollywood.jpeg";

import bollywood2 from "./bollywood2.jpeg";

import hitSong from "./hitSong.jpg";

import img10 from "./img10.jpg";
import img15 from "./img15.jpg";
import img16 from "./img16.jpg";

import OMaahixVeHaaniyaan from "./OMaahixVeHaaniyaan.mp3";
import BornToShine from "./BornToShine.mp3";
import Dooriyaan from "./Dooriyaan.mp3";
import HayeNiApaFerMilange from "./HayeNiApaFerMilange.mp3";
import Sunday from "./Sunday.mp3";
import Wishes from "./Wishes.mp3";
import RubiconDrill from "./RubiconDrill.mp3";
import SummertimeSadness from "./SummertimeSadness.mp3";
import TuHai from "./TuHai.mp3";
import sangraHiyo from "./sangraHiyo.mp3";
import DILJAANIYE from "./DILJAANIYE.mp3";
import Soulmate from "./Soulmate.mp3";
import Qissa from "./Qissa.mp3";

export const assets = {
  bell_icon,
  home_icon,
  like_icon,
  loop_icon,
  mic_icon,
  next_icon,
  play_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
  speaker_icon,
  stack_icon,
  zoom_icon,
  plus_icon,
  arrow_icon,
  mini_player_icon,
  volume_icon,
  queue_icon,
  pause_icon,
  arrow_left,
  arrow_right,
  spotify_logo,
  clock_icon,
};

export const albumsData = [
  {
    id: 0,
    name: "Bollywood",
    image: bollywood,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#2a4365",
  },

  {
    id: 1,
    name: "bollywood 2",
    image: bollywood2,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#22543d",
  },

  {
    id: 2,
    name: "Trending India",
    image: img10,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#742a2a",
  },

  {
    id: 3,
    name: "Trending Global",
    image: img16,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#44337a",
  },

  {
    id: 4,
    name: "Mega Hits,",
    image: hitSong,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#234e52",
  },

  {
    id: 5,
    name: "Happy Favorites",
    image: img15,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#744210",
  },
];

export const songsData = [
  {
    id: 0,
    name: "O Maahi x Ve Haaniyaan",
    image: mahhhi,
    file: OMaahixVeHaaniyaan,
    desc: "by Pritam | Arijit Singh | Irshad Kamil | Shreya Ghoshal",
    duration: "4:46",
  },

  {
    id: 1,
    name: "Born To Shine",
    image: born,
    file: BornToShine,
    desc: " by Diljit Dosanjh",
    duration: "3:37",
  },

  {
    id: 2,
    name: "Dooriyaan",
    image: dooriyaan,
    file: Dooriyaan,
    desc: "by KALAM INK | Aniket Raturi",
    duration: "3:55",
  },

  {
    id: 3,
    name: "aapa Fir Milage",
    image: fir,
    file: HayeNiApaFerMilange,
    desc: "by Savi Kahlon",
    duration: "5:8",
  },

  {
    id: 4,
    name: "Sunday",
    image: sunday,
    file: Sunday,
    desc: "by  Aditya A | Naalayak | Ronit Vinta",
    duration: "2:25",
  },

  {
    id: 5,
    name: "Wishes",
    image: wishes,
    file: Wishes,
    desc: "by Hasan Raheem",
    duration: "3:38",
  },

  {
    id: 6,
    name: "Rubicon Drill",
    image: rubi,
    file: RubiconDrill,
    desc: "by Parmish Verma | Gurlez Akhtar",
    duration: "3:37",
  },

  {
    id: 7,
    name: "Summertime",
    image: summertime,
    file: SummertimeSadness,
    desc: "by Lana del Rey",
    duration: "4:25",
  },

  {
    id: 8,
    name: "Tu hai",
    image: tuhai,
    file: TuHai,
    desc: "by Darshan Raval | Prakriti Giri",
    duration: "3:07",
  },

  {
    id: 9,
    name: "sangrahiyo",
    image: sangrahiyo,
    file: sangraHiyo,
    desc: "by Jasleen Royal | Ranveer Allahbadia | jjwal Kashyap",
    duration: "3:32",
  },

  {
    id: 10,
    name: "Dil Jaaniye",
    image: dil,
    file: DILJAANIYE,
    desc: "by Jubin Nautiyal | Tulsi Kumar",
    duration: "5:01",
  },
  {
    id: 11,
    name: "Soulmate",
    image: king,
    file: Soulmate,
    desc: "by Badshah | Arijit Singh",
    duration: "3:33",
  },

  {
    id: 12,
    name: "Qissa",
    image: qissa,
    file: Qissa,
    desc: "by Bhavdeep Romana | Mukul Sharma",
    duration: "3:34",
  },
];
