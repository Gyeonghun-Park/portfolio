import iconList from "../../iconList";
import sample from "./sample.png";

const findIcon = (name) => {
  return { ...iconList.find((icon) => icon.name === name) };
};

const projects = [
  {
    bg: "#5a0000",
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
      findIcon("django"),
      findIcon("mysql"),
      findIcon("python"),
      findIcon("javascript"),
      findIcon("react"),
      findIcon("redux"),
    ],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis turpis nec felis sodales iaculis. Praesent in sodales ligula. Phasellus consequat tempor sem, a tincidunt sem mattis vitae. Aenean ornare molestie quam a lobortis. Suspendisse potenti. Aenean lacus diam, bibendum ac fringilla eu, tincidunt vitae neque. In in tristique lorem, eu vestibulum nibh. Quisque vestibulum semper sem, eu molestie odio gravida vitae. Donec eleifend faucibus mauris ac iaculis. Phasellus rhoncus molestie aliquet. Vivamus ultricies sit amet arcu a pellentesque. Nam congue fermentum fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demo: "https://github.com/Gyeonghun-Park",
    code: "https://github.com/Gyeonghun-Park",
  },
  {
    bg: "#681500",
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
    title: "Awesome Project Title 02",
    icons: [
      findIcon("django"),
      findIcon("mysql"),
      findIcon("python"),
      findIcon("javascript"),
      findIcon("react"),
      findIcon("redux"),
    ],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis turpis nec felis sodales iaculis. Praesent in sodales ligula. Phasellus consequat tempor sem, a tincidunt sem mattis vitae. Aenean ornare molestie quam a lobortis. Suspendisse potenti. Aenean lacus diam, bibendum ac fringilla eu, tincidunt vitae neque. In in tristique lorem, eu vestibulum nibh. Quisque vestibulum semper sem, eu molestie odio gravida vitae. Donec eleifend faucibus mauris ac iaculis. Phasellus rhoncus molestie aliquet. Vivamus ultricies sit amet arcu a pellentesque. Nam congue fermentum fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demo: "https://github.com/Gyeonghun-Park",
    code: "https://github.com/Gyeonghun-Park",
  },
  {
    bg: "#644c09",
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
    title: "Awesome Project Title 03",
    icons: [
      findIcon("django"),
      findIcon("mysql"),
      findIcon("python"),
      findIcon("javascript"),
      findIcon("react"),
      findIcon("redux"),
    ],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis turpis nec felis sodales iaculis. Praesent in sodales ligula. Phasellus consequat tempor sem, a tincidunt sem mattis vitae. Aenean ornare molestie quam a lobortis. Suspendisse potenti. Aenean lacus diam, bibendum ac fringilla eu, tincidunt vitae neque. In in tristique lorem, eu vestibulum nibh. Quisque vestibulum semper sem, eu molestie odio gravida vitae. Donec eleifend faucibus mauris ac iaculis. Phasellus rhoncus molestie aliquet. Vivamus ultricies sit amet arcu a pellentesque. Nam congue fermentum fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demo: "https://github.com/Gyeonghun-Park",
    code: "https://github.com/Gyeonghun-Park",
  },
  {
    bg: "#1c2b11",
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
    title: "Awesome Project Title 04",
    icons: [
      findIcon("django"),
      findIcon("mysql"),
      findIcon("python"),
      findIcon("javascript"),
      findIcon("react"),
      findIcon("redux"),
    ],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis turpis nec felis sodales iaculis. Praesent in sodales ligula. Phasellus consequat tempor sem, a tincidunt sem mattis vitae. Aenean ornare molestie quam a lobortis. Suspendisse potenti. Aenean lacus diam, bibendum ac fringilla eu, tincidunt vitae neque. In in tristique lorem, eu vestibulum nibh. Quisque vestibulum semper sem, eu molestie odio gravida vitae. Donec eleifend faucibus mauris ac iaculis. Phasellus rhoncus molestie aliquet. Vivamus ultricies sit amet arcu a pellentesque. Nam congue fermentum fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demo: "https://github.com/Gyeonghun-Park",
    code: "https://github.com/Gyeonghun-Park",
  },
  {
    bg: "#001738",
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
    title: "Awesome Project Title 05",
    icons: [
      findIcon("django"),
      findIcon("mysql"),
      findIcon("python"),
      findIcon("javascript"),
      findIcon("react"),
      findIcon("redux"),
    ],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis turpis nec felis sodales iaculis. Praesent in sodales ligula. Phasellus consequat tempor sem, a tincidunt sem mattis vitae. Aenean ornare molestie quam a lobortis. Suspendisse potenti. Aenean lacus diam, bibendum ac fringilla eu, tincidunt vitae neque. In in tristique lorem, eu vestibulum nibh. Quisque vestibulum semper sem, eu molestie odio gravida vitae. Donec eleifend faucibus mauris ac iaculis. Phasellus rhoncus molestie aliquet. Vivamus ultricies sit amet arcu a pellentesque. Nam congue fermentum fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demo: "https://github.com/Gyeonghun-Park",
    code: "https://github.com/Gyeonghun-Park",
  },
  {
    bg: "#1b0f38",
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
    title: "Awesome Project Title 06",
    icons: [
      findIcon("django"),
      findIcon("mysql"),
      findIcon("python"),
      findIcon("javascript"),
      findIcon("react"),
      findIcon("redux"),
    ],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis turpis nec felis sodales iaculis. Praesent in sodales ligula. Phasellus consequat tempor sem, a tincidunt sem mattis vitae. Aenean ornare molestie quam a lobortis. Suspendisse potenti. Aenean lacus diam, bibendum ac fringilla eu, tincidunt vitae neque. In in tristique lorem, eu vestibulum nibh. Quisque vestibulum semper sem, eu molestie odio gravida vitae. Donec eleifend faucibus mauris ac iaculis. Phasellus rhoncus molestie aliquet. Vivamus ultricies sit amet arcu a pellentesque. Nam congue fermentum fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demo: "https://github.com/Gyeonghun-Park",
    code: "https://github.com/Gyeonghun-Park",
  },
  {
    bg: "#240737",
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
    title: "Awesome Project Title 07",
    icons: [
      findIcon("django"),
      findIcon("mysql"),
      findIcon("python"),
      findIcon("javascript"),
      findIcon("react"),
      findIcon("redux"),
    ],
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis turpis nec felis sodales iaculis. Praesent in sodales ligula. Phasellus consequat tempor sem, a tincidunt sem mattis vitae. Aenean ornare molestie quam a lobortis. Suspendisse potenti. Aenean lacus diam, bibendum ac fringilla eu, tincidunt vitae neque. In in tristique lorem, eu vestibulum nibh. Quisque vestibulum semper sem, eu molestie odio gravida vitae. Donec eleifend faucibus mauris ac iaculis. Phasellus rhoncus molestie aliquet. Vivamus ultricies sit amet arcu a pellentesque. Nam congue fermentum fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    demo: "https://github.com/Gyeonghun-Park",
    code: "https://github.com/Gyeonghun-Park",
  },
];

export default projects;
