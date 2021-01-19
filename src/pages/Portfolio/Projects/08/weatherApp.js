import { reactIcon, cssIcon } from "../../../../iconList";
import cover from "./cover.png";
import first from "./first.png";
import second from "./second.png";
import third from "./third.png";
import fourth from "./fourth.png";

const weatherApp = {
  cover: cover,
  previews: [
    {
      preview: first,
      desc: "Rainy Weather",
    },
    {
      preview: second,
      desc: "Snowy Weather",
    },
    {
      preview: third,
      desc: "Sunny Weather",
    },
    {
      preview: fourth,
      desc: "Thundering Weather",
    },
  ],
  title: "Weather App",
  icons: [reactIcon, cssIcon],
  cfs: [
    {
      title: "Concept",
      contents: ["Implemente a Simple Weather Application"],
    },
  ],
  demo: "",
  code: "https://github.com/Gyeonghun-Park/weather_app_reactnative",
};

export default weatherApp;
