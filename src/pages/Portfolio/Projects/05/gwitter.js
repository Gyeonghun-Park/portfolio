import {
  reactIcon,
  cssIcon,
  javascriptIcon,
  firebaseIcon,
} from "../../../../iconList";
import cover from "./cover.png";
import first from "./first.png";
import second from "./second.png";

const gwitter = {
  cover: cover,
  previews: [
    {
      preview: first,
      desc: "Login Pag",
    },
    {
      preview: second,
      desc: "Main Page",
    },
  ],
  title: "Gwitter",
  icons: [reactIcon, cssIcon, javascriptIcon, firebaseIcon],
  cfs: [
    {
      title: "Concept",
      contents: [
        "Implement idea prototypes incredibly quickly.",
        "Without backend coding! implement authentication and real-time DB ",
      ],
    },
    {
      title: "Services",
      contents: [
        "Firebase",
        "Cloud Firestore",
        "NoSQL Realtime, Query, Filter",
        "Firebase Authentication",
        "Google Cloud Storage",
      ],
    },
    {
      title: "Features",
      contents: [
        "Email, Google, Github, Social Authentication",
        "Tweet CRUD",
        "Protected Pages",
        "Profile Page",
        "File Upload",
        "Deploy",
        "API Key Security",
      ],
    },
  ],
  demo: "https://gyeonghun-park.github.io/gwitter/#/",
  code: "https://github.com/Gyeonghun-Park/gwitter",
};

export default gwitter;
