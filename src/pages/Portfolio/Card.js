import { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sample from "../../img/sample.jpg";
import express from "../../img/express.svg";
import html from "../../img/html-5.svg";
import javascript from "../../img/javascript.svg";
import mongodb from "../../img/mongodb.svg";
import nodejs from "../../img/nodejs.svg";
import tailwindcss from "../../img/tailwindcss-icon.svg";
import webpack from "../../img/webpack.svg";
import { faCode, faEye } from "@fortawesome/free-solid-svg-icons";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(34, 34, 34, 0.75)",
  },
  content: {
    position: "absolute",
    top: "20vh",
    left: "20vw",
    right: "20vw",
    bottom: "20vh",
    border: "1px solid #3b3b3b",
    background: "#222222",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: 0,
    color: "white",
  },
};

Modal.setAppElement("#root");
const Card = ({ num }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div
      className="absolute top-0 left-0 bg-purple-400 ring-gray-700 ring-1"
      style={{ width: 310, height: 220 }}
    >
      {num}
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div class="w-full h-full">
          <button
            onClick={() => setModalIsOpen(false)}
            class="absolute top-0 right-0 flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
          >
            <svg
              class="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </button>

          <div className="grid grid-cols-2 w-full h-full">
            <div className="flex items-center">
              <img src={sample} alt="sample" />
            </div>
            <div className="bg-input">
              <div className="flex flex-col p-5">
                <span className="text-gray-300 font-bold">PROJECT</span>
                <span className="text-gray-50 font-extrabold text-3xl mt-3">
                  Awesome Project Title
                </span>
                <span className="text-gray-300 mt-5">What did I use?</span>
                <div className="grid grid-flow-col auto-cols-fr justify-items-centert items-center gap-4 px-5 mt-5">
                  <img src={express} alt="icon" />
                  <img src={html} alt="icon" />
                  <img src={javascript} alt="icon" />
                  <img src={mongodb} alt="icon" />
                  <img src={nodejs} alt="icon" />
                  <img src={tailwindcss} alt="icon" />
                  <img src={webpack} alt="icon" />
                </div>
                <span className="text-gray-200 font-bold text-2xl mt-3">
                  About
                </span>
                <span className="overflow-y-scroll max-h-48 mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tincidunt felis eget nunc maximus semper. Nam accumsan luctus
                  turpis quis congue. Aliquam faucibus mauris at nulla accumsan
                  tempus. Aenean vulputate rhoncus nunc vel facilisis. Maecenas
                  placerat dolor ante, ac convallis ligula luctus sed. Cras
                  rhoncus dui odio. Aliquam eu fringilla risus. Sed nec nulla
                  augue. Vestibulum condimentum nibh quis metus hendrerit
                  molestie. Nunc sit amet urna nunc. Vestibulum justo enim,
                  luctus eu lacus eu, pretium porttitor urna. Nullam cursus urna
                  eu varius dictum. Nunc non elit diam. Aliquam erat volutpat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam erat volutpat. Suspendisse pellentesque convallis elit
                  sit amet lobortis. Etiam eu lectus porta, iaculis ante non,
                  posuere erat. Pellentesque a rhoncus felis. Etiam mollis
                  maximus sapien nec pulvinar. Proin eros mi, sagittis ac
                  accumsan vitae, semper nec mi. Phasellus cursus tortor purus,
                  vitae convallis ipsum commodo id. Integer gravida placerat
                  elit, eu viverra ex placerat ultricies. Donec a odio vitae
                  augue pharetra rhoncus. Pellentesque pellentesque facilisis
                  lacus, nec tincidunt velit fringilla nec. Aliquam placerat
                  felis diam, at pharetra quam auctor vitae.
                </span>
                <div className="grid grid-cols-2 justify-items-center items-center mt-5">
                  <button className="bg-gray-700 p-3 w-36">
                    <FontAwesomeIcon icon={faCode} />
                    DEMO
                  </button>
                  <button className="bg-gray-700 p-3 w-36">
                    <FontAwesomeIcon icon={faEye} />
                    CODE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Card;
