import { reactIcon, cssIcon, firebaseIcon } from "../../../../iconList";
import cover from "./cover.png";
import first from "./first.gif";
import second from "./second.gif";
import third from "./third.png";

const coronaDashboard = {
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
  title: "Corona Dashboard",
  icons: [reactIcon, cssIcon, firebaseIcon],
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

export default coronaDashboard;
