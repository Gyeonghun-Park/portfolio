import { reactIcon, cssIcon, javascriptIcon } from "../../../../iconList";
import cover from "./cover.png";
import first from "./first.png";
import second from "./second.png";
import third from "./third.png";

const getflix = {
  cover: cover,
  previews: [
    {
      preview: first,
      desc: "Main Page",
    },
    {
      preview: second,
      desc: "Search Movies and TV Shows",
    },
    {
      preview: third,
      desc: "Movie / TV Show Details",
    },
  ],
  title: "Getflix",
  icons: [reactIcon, cssIcon, javascriptIcon],
  cfs: [
    {
      title: "Concept",
      contents: ["Practicing React and ES6 by building a Movie Discovery App."],
    },
    {
      title: "Features",
      contents: [
        "List Movies",
        "TV Shows",
        "The MovieDB API",
        "Container / Presenter Pattern",
        "To Do List with useReducer",
        "Deployment to Netlify",
      ],
    },
  ],
  demo: "https://Gyeonghun-Park.github.io/getflix",
  code: "https://github.com/Gyeonghun-Park/getflix",
};

export default getflix;
