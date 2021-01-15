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
import first from "./first.gif";
import second from "./second.gif";
import third from "./third.png";

const wetube = {
  cover: cover,
  previews: [
    {
      preview: first,
      desc: "Real-time interactions between users",
      src:
        "https://thawing-journey-31791.herokuapp.com/videos/6000e50c9fe3e900629e2e4a",
    },
    {
      preview: second,
      desc: "E2E Testing + Unit Testing",
      src:
        "https://thawing-journey-31791.herokuapp.com/videos/6000e8a79fe3e900629e2e4c",
    },
    {
      preview: third,
      desc: "Data visualization with Victory",
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
