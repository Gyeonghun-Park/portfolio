import {
  reactIcon,
  cssIcon,
  javascriptIcon,
  expoIcon,
} from "../../../../iconList";
import cover from "./cover.png";
import first from "./first.gif";
import second from "./second.gif";
import third from "./third.png";
import fourth from "./fourth.png";

const govies = {
  cover: cover,
  previews: [
    {
      preview: first,
      desc: "Main Page",
    },
    {
      preview: second,
      desc: "Upcoming Movie Slider",
    },
    {
      preview: third,
      desc: "Search Movies and TV Shows",
    },
    {
      preview: fourth,
      desc: "Movie / TV Show Details Page",
    },
  ],
  title: "Govies",
  icons: [reactIcon, cssIcon, javascriptIcon, expoIcon],
  cfs: [
    {
      title: "Concept",
      contents: [
        "Implement beautiful Tri-platform (iOS, Android, Web) Application built with React Native & React Native Web.",
      ],
    },
    {
      title: "Movies",
      contents: [
        "Upcoming Movie Slider",
        "See Latest Movies",
        "Search Movies and TV Shows",
        "See Movie / TV Show Details",
        "in-app Broswer",
        "Discovery Cards Screen",
      ],
    },
  ],
  demo: "",
  code: "https://github.com/Gyeonghun-Park/govies",
};

export default govies;
