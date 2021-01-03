import iconList from "../../iconList";
import sample from "./sample.png";

const projects = [
  {
    bg: "#2b2b2b",
    cover: sample,
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
    title: "Awesome Project Title 01",
    icons: [
      ...iconList.filter((icon) => icon.name === "django"),
      ...iconList.filter((icon) => icon.name === "mysql"),
      ...iconList.filter((icon) => icon.name === "python"),
      ...iconList.filter((icon) => icon.name === "javascript"),
      ...iconList.filter((icon) => icon.name === "react"),
      ...iconList.filter((icon) => icon.name === "redux"),
    ],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis turpis nec felis sodales iaculis. Praesent in sodales ligula. Phasellus consequat tempor sem, a tincidunt sem mattis vitae. Aenean ornare molestie quam a lobortis. Suspendisse potenti. Aenean lacus diam, bibendum ac fringilla eu, tincidunt vitae neque. In in tristique lorem, eu vestibulum nibh. Quisque vestibulum semper sem, eu molestie odio gravida vitae. Donec eleifend faucibus mauris ac iaculis. Phasellus rhoncus molestie aliquet. Vivamus ultricies sit amet arcu a pellentesque. Nam congue fermentum fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demo: "https://github.com/Gyeonghun-Park",
    code: "https://github.com/Gyeonghun-Park",
  },
];

export default projects;
