import {
  pythonIcon,
  djangoIcon,
  htmlIcon,
  sassIcon,
  javascriptIcon,
  gulpIcon,
  tailwindcssIcon,
  awsIcon,
} from "../../../../iconList";
import cover from "./cover.png";
import first from "./first.gif";
import second from "./second.gif";
import third from "./third.png";

const landBnb = {
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
  title: "Landbnb",
  icons: [
    pythonIcon,
    djangoIcon,
    htmlIcon,
    sassIcon,
    javascriptIcon,
    gulpIcon,
    tailwindcssIcon,
    awsIcon,
  ],
  cfs: [
    {
      title: "Concept",
      contents: [
        "Build a multi-role real-world application.",
        "Make professional backends using Python and Django.",
        "Implement technologies that start-ups need. (Scheduled, Review, Messaging, Translation, Admin Panel)",
        "Build real-time interactions between users.",
      ],
    },
    {
      title: "Users",
      contents: [
        "User Authentication",
        "Github Login",
        "Google Login",
        "Admin Panel",
        "Host / Admin Mode",
        "Direct Messages",
      ],
    },
    {
      title: "Rooms",
      contents: [
        "Room CRUD",
        "Reservation Calendar",
        "Room Admin",
        "Image Upload",
        "Review System",
      ],
    },
    {
      title: "Deployment",
      contents: ["AWS Elastic Beanstalk", "AWS S3", "AWS RDS"],
    },
    {
      title: "Features",
      contents: [
        "Messaging",
        "Add Favorites",
        "Review",
        "Generate dummy data for testing",
        "Reservation & Calendar",
        "Admin Panel",
        "Translation",
      ],
    },
  ],
  demo: "http://airbnb-clone2-dev.us-east-1.elasticbeanstalk.com/",
  code: "https://github.com/Gyeonghun-Park/airbnb-clone",
};

export default landBnb;
