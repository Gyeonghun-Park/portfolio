import {
  pythonIcon,
  djangoIcon,
  expoIcon,
  reactIcon,
  reduxIcon,
  graphqlIcon,
} from "../../../../iconList";
import cover from "./cover.png";
import first from "./first.gif";
import second from "./second.png";

const landBnbApp = {
  cover: cover,
  previews: [
    {
      preview: first,
      desc:
        "User authentication, search, favorites, maps with React native & Django Rest Framework",
      src:
        "https://thawing-journey-31791.herokuapp.com/videos/6000e50c9fe3e900629e2e4a",
    },
    {
      preview: second,
      desc: "Server-Side Session with Django Rest Framework",
    },
  ],
  title: "Landbnb App",
  icons: [pythonIcon, djangoIcon, expoIcon, reactIcon, reduxIcon, graphqlIcon],
  cfs: [
    {
      title: "Concept",
      contents: [
        "Make professional app using React Native and Expo.",
        "Implement user auth using Redux",
        "Django + Rest API, GraphQL API",
      ],
    },
    {
      title: "REST API",
      contents: [
        "Serializers",
        "Class Based Views",
        "JWT Auth",
        "Room CRUD",
        "Viewsets",
      ],
    },
    {
      title: "GraphQL API",
      contents: [
        "Schema",
        "Queries",
        "Mutations",
        "Auth Middlewares",
        "Room CRUD",
      ],
    },
    {
      title: "App",
      contents: [
        "User Auth",
        "Create Account",
        "Room Search",
        "Room Detail",
        "Favourites",
        "Map Screen",
      ],
    },
  ],
  demo: "",
  code: "https://github.com/Gyeonghun-Park/airbnb-native",
};

export default landBnbApp;
