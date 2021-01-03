import Modal from "react-modal";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import express from "../../img/express.svg";
import html from "../../img/html-5.svg";
import javascript from "../../img/javascript.svg";
import mongodb from "../../img/mongodb.svg";
import nodejs from "../../img/nodejs.svg";
import tailwindcss from "../../img/tailwindcss-icon.svg";
import webpack from "../../img/webpack.svg";
import { faCode, faEye } from "@fortawesome/free-solid-svg-icons";

const fadeImages = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(34, 34, 34, 0.25)",
    zIndex: 30,
  },
  content: {
    position: "absolute",
    top: "15vh",
    left: "20vw",
    right: "20vw",
    bottom: "15vh",
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
const Card = ({ bg, content, modalIsOpen, setModalIsOpen }) => {
  return (
    <div
      className="absolute top-0 left-0 shadow-2xl ring-gray-700"
      style={{
        width: 220,
        height: 310,
        backgroundColor: bg,
        backgroundImage: `url(${content})`,
      }}
    >
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div className="w-full h-full animate__animated animate__fadeIn">
          <button
            onClick={() => setModalIsOpen(false)}
            className="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white"
          >
            <svg
              className="text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </button>

          <div className="grid w-full h-full grid-cols-2">
            <Fade transitionDuration={500} className="mt-auto mb-auto">
              <div className="each-fade">
                <div className="image-container">
                  <img src={fadeImages[0]} />
                </div>
                <h2>First Slide 1/3</h2>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={fadeImages[1]} />
                </div>
                <h2>Second Slide 2/3</h2>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={fadeImages[2]} />
                </div>
                <h2>Third Slide 3/3</h2>
              </div>
            </Fade>
            <div className="bg-input">
              <div className="flex flex-col p-5">
                <span className="mt-5 font-bold text-gray-300">PROJECT</span>
                <span className="mt-3 text-3xl font-extrabold text-gray-50">
                  Awesome Project Title
                </span>
                <span className="mt-5 text-gray-300">What did I use?</span>
                <div className="grid items-center grid-flow-col gap-4 px-5 mt-5 auto-cols-fr justify-items-centert">
                  <img src={express} alt="icon" />
                  <img src={html} alt="icon" />
                  <img src={javascript} alt="icon" />
                  <img src={mongodb} alt="icon" />
                  <img src={nodejs} alt="icon" />
                  <img src={tailwindcss} alt="icon" />
                  <img src={webpack} alt="icon" />
                </div>
                <span className="mt-3 text-2xl font-bold text-gray-200">
                  About
                </span>
                <span className="p-3 mt-2 overflow-auto h-72 max-h-72 scrollbar-thin scrollbar-track-black-300 scrollbar-thumb-tag">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tincidunt felis eget nunc maximus semper. Nam accumsan luctus
                  turpis quis congue. Aliquam faucibus mauris at nulla accumsan
                  Lore Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed tincidunt felis eget nunc maximus semper. Nam accumsan
                  luctus turpis quis congue. Aliquam faucibus mauris at nulla
                  accumsan Lore Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed tincidunt felis eget nunc maximus semper.
                  Nam accumsan luctus turpis quis congue. Aliquam faucibus
                  mauris at nulla accumsan Lore Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed tincidunt felis eget nunc
                  maximus semper. Nam accumsan luctus turpis quis congue.
                  Aliquam faucibus mauris at nulla accumsan Lore Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Sed tincidunt
                  felis eget nunc maximus semper. Nam accumsan luctus turpis
                  quis congue. Aliquam faucibus mauris at nulla accumsan Lore
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tincidunt felis eget nunc maximus semper. Nam accumsan luctus
                  turpis quis congue. Aliquam faucibus mauris at nulla accumsan
                  Lore
                </span>
                <div className="grid items-center grid-cols-2 mt-5 justify-items-center">
                  <button className="p-3 bg-gray-700 w-36">
                    <FontAwesomeIcon icon={faEye} />
                    DEMO
                  </button>
                  <button className="p-3 bg-gray-700 w-36">
                    <FontAwesomeIcon icon={faCode} />
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
