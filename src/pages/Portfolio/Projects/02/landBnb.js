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
import first from "./first.png";
import second from "./second.png";
import third from "./third.gif";
import fourth from "./fourth.gif";
import fifth from "./fifth.png";

const landBnb = {
  cover: cover,
  previews: [
    {
      preview: first,
      desc: "Home page",
    },
    {
      preview: second,
      desc: "Room detail page",
    },
    {
      preview: third,
      desc: "Translation",
    },
    {
      preview: fourth,
      desc: "Login & Logout",
    },
    {
      preview: fifth,
      desc: "Make a Reservation",
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
