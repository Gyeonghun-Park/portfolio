import { pythonIcon, htmlIcon } from "../../../../iconList";
import cover from "./cover.png";
import first from "./first.png";
import second from "./second.png";

const coronaDashboard = {
  cover: cover,
  previews: [
    {
      preview: first,
      desc: "Main Dash Board",
    },
    {
      preview: second,
      desc: "Search for a specific country",
    },
  ],
  title: "Corona Dashboard",
  icons: [pythonIcon, htmlIcon],
  cfs: [
    {
      title: "Concept",
      contents: [
        "Process coronavirus data using Pandas.",
        "Create interactive dashboards with Dash",
      ],
    },
    {
      title: "Features",
      contents: [
        "Data Manipulation",
        "Dash HTML Components",
        "Dash Core Interactive Components",
        "Line Charts",
        "Map Charts",
        "Bar Charts",
      ],
    },
  ],
  demo: "https://corona-dashboardpotato.herokuapp.com/",
  code: "https://github.com/Gyeonghun-Park/corona-dashboard",
};

export default coronaDashboard;
