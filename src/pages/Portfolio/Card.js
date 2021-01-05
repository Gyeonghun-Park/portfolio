import Modal from "react-modal";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEye } from "@fortawesome/free-solid-svg-icons";

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
const Card = ({
  bg,
  cover,
  previews,
  title,
  icons,
  about,
  demo,
  code,
  index,
  modalIsOpen,
  setModalIsOpen,
}) => {
  return (
    <div
      className="absolute top-0 left-0 shadow-2xl ring-gray-700"
      style={{
        width: 220,
        height: 310,
        backgroundColor: bg,
        backgroundImage: `url(${cover})`,
      }}
    >
      <Modal
        isOpen={modalIsOpen[index]}
        onRequestClose={() => {
          const tmp = {};
          tmp[index] = false;
          setModalIsOpen((prev) => ({ ...prev, ...tmp }));
        }}
        style={customStyles}
      >
        <div className="w-full h-full animate__animated animate__fadeIn">
          <button
            onClick={() => {
              const tmp = {};
              tmp[index] = false;
              setModalIsOpen((prev) => ({ ...prev, ...tmp }));
            }}
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
            <Fade transitionDuration={300} autoPlay={false} className="my-auto">
              {previews.map((preview, i) => (
                <div
                  key={preview.desc}
                  className="flex flex-col items-center each-slide"
                >
                  <img src={preview.preview} alt={preview.desc} />
                  <span className="mt-5 text-2xl text-gray-300">{`${preview.desc}`}</span>
                  <span className="mt-5 text-2xl text-gray-300">{`${i + 1} / ${
                    previews.length
                  }`}</span>
                </div>
              ))}
            </Fade>
            <div className="bg-input">
              <div className="flex flex-col p-5">
                <span className="mt-5 font-bold text-gray-50">PROJECT</span>
                <span className="mt-3 text-3xl font-extrabold text-gray-300">
                  {title}
                </span>
                <span className="mt-5 text-gray-50">What did I use?</span>
                <div className="grid items-center grid-flow-col gap-4 px-5 mt-5 auto-cols-fr justify-items-centert">
                  {icons.map((icon) => (
                    <a
                      key={icon.name}
                      target="_blank"
                      rel="noreferrer"
                      href={icon.path}
                    >
                      <img src={icon.icon} alt={icon.name} />
                    </a>
                  ))}
                </div>
                <span className="mt-3 text-2xl font-bold text-gray-50">
                  About
                </span>
                <span className="p-3 mt-2 overflow-auto text-gray-300 h-72 max-h-72 scrollbar-thin scrollbar-track-black-300 scrollbar-thumb-tag">
                  {about}
                </span>
                <div className="grid items-center grid-cols-2 mt-5 justify-items-center">
                  <a target="_blank" rel="noreferrer" href={demo}>
                    <button className="p-3 bg-gray-700 w-36">
                      <FontAwesomeIcon icon={faEye} />
                      &nbsp;DEMO
                    </button>
                  </a>
                  <a target="_blank" rel="noreferrer" href={code}>
                    <button className="p-3 bg-gray-700 w-36">
                      <FontAwesomeIcon icon={faCode} />
                      &nbsp;CODE
                    </button>
                  </a>
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
