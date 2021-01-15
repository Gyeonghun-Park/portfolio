import {
  typescriptIcon,
  nestjsIcon,
  jestIcon,
  reactIcon,
  graphqlIcon,
  postgresqlIcon,
  tailwindcssIcon,
} from "../../../../iconList";
import cover from "./cover.png";
import first from "./first.gif";
import second from "./second.gif";
import third from "./third.png";

const guberEats = {
  bg: "#5a0000",
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
  title: "Guber Eats",
  icons: [
    typescriptIcon,
    nestjsIcon,
    jestIcon,
    reactIcon,
    graphqlIcon,
    postgresqlIcon,
    tailwindcssIcon,
  ],
  cfs: [
    {
      title: "Concept",
      contents: [
        "Build a multi-role real-world application.",
        "Make professional backends using NestJS.",
        "Use E2E and Unit Testing in Frontend and in Backend.",
        "Build real-time interactions between users.",
      ],
    },
    {
      title: "Users",
      contents: [
        "User Authentication",
        "Email Verification",
        "Photo Upload",
        "User / Delivery Man / Restaurant Owner Profile",
      ],
    },
    {
      title: "Restaurants",
      contents: [
        "Restaurant CRUD",
        "Dish CRUD",
        "Realtime Order Notifications",
        "Sales Dashboard (Data Visualization)",
        "Premium Feature (Online Payments)",
      ],
    },
    {
      title: "Nest Functions",
      contents: ["Modules", "Guards", "Middlewares", "Decorators"],
    },
    {
      title: "Features",
      contents: [
        "Online Payments",
        "Google Maps",
        "Unit Testing",
        "End to End Testing",
        "Data Visualization",
        "Tailwind CSS",
        "JWT Authentication",
      ],
    },
  ],
  demo: "https://inspiring-brown-4efdef.netlify.app/",
  code: "https://github.com/Gyeonghun-Park/guber-eats-backend",
};

export default guberEats;
