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

const guberEats = {
  bg: "#5a0000",
  cover: cover,
  previews: [
    {
      preview:
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      desc: "First Preview",
    },
    {
      preview:
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      desc: "Second Preview",
    },
    {
      preview:
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      desc: "Third Preview",
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
  demo: "https://github.com/Gyeonghun-Park",
  code: "https://github.com/Gyeonghun-Park",
};

export default guberEats;
