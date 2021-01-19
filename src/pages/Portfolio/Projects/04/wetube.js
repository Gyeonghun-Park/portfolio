import {
  nodejsIcon,
  babelIcon,
  expressIcon,
  webpackIcon,
  javascriptIcon,
  sassIcon,
  pugIcon,
  mongodbIcon,
} from "../../../../iconList";
import cover from "./cover.png";
import first from "./first.png";
import second from "./second.png";
import third from "./third.png";
import fourth from "./fourth.png";

const wetube = {
  cover: cover,
  previews: [
    {
      preview: first,
      desc: "Main Page",
    },
    {
      preview: second,
      desc: "User Profuke Page",
    },
    {
      preview: third,
      desc: "Upload Page",
    },
    {
      preview: fourth,
      desc: "Video Detail Page",
    },
  ],
  title: "Wetube",
  icons: [
    nodejsIcon,
    babelIcon,
    expressIcon,
    webpackIcon,
    javascriptIcon,
    sassIcon,
    pugIcon,
    mongodbIcon,
  ],
  cfs: [
    {
      title: "Concept",
      contents: [
        "Make professional backends using vanilla JS and Express.",
        "Implement video player and middlewares",
        "Build real-time interactions between users.",
      ],
    },
    {
      title: "Users",
      contents: [
        "User Authentication",
        "Facebook Login",
        "Github Login",
        "Google Login",
        "User Profile",
        "Log In",
        "Log Out",
      ],
    },
    {
      title: "Videos",
      contents: [
        "Video Upload",
        "Video Recording",
        "Search Video",
        "AJAX Comments",
        "View Count",
      ],
    },
    {
      title: "Deployment",
      contents: ["Heroku", "S3 Upload", "Mongo Atlas"],
    },
    {
      title: "Features",
      contents: [
        "CRUD Video & User",
        "Social Logins",
        "Templates",
        "Screen recording",
      ],
    },
  ],
  demo: "https://thawing-journey-31791.herokuapp.com/",
  code: "https://github.com/Gyeonghun-Park/youtube-clone",
};

export default wetube;
