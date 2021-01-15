import Modal from "react-modal";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCode, faEye } from "@fortawesome/free-solid-svg-icons";

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
    top: "8vh",
    left: "15vw",
    right: "15vw",
    bottom: "8vh",
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
  cfs,
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
            <Fade
              transitionDuration={300}
              autoplay={false}
              className="flex flex-col justify-center h-full"
            >
              {previews.map((preview, i) => (
                <div
                  key={preview.desc}
                  className="flex flex-col items-center each-slide"
                >
                  <img
                    src={preview.preview}
                    alt={preview.desc}
                    className="my-auto"
                  />
                  {preview.src && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={preview.src}
                      className="mt-5"
                    >
                      <button className="p-2 bg-gray-700 w-36">
                        View on Web
                      </button>
                    </a>
                  )}
                  <span className="mt-5 text-2xl text-white">{`${preview.desc}`}</span>
                  <span className="my-auto text-xl text-gray-300">{`${
                    i + 1
                  } / ${previews.length}`}</span>
                </div>
              ))}
            </Fade>
            <div className="bg-input">
              <div className="flex flex-col justify-center h-full p-5">
                <div className="flex flex-col my-auto">
                  <span className="font-bold text-gray-200">PROJECT</span>
                  <span className="mt-1 text-3xl font-extrabold text-gray-50">
                    {title}
                  </span>
                </div>
                <span className="my-auto text-gray-50">What did I use?</span>
                <div className="grid items-center grid-flow-col gap-4 px-5 my-auto mt-5 auto-cols-fr justify-items-centert">
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
                <span className="my-auto mt-3 text-2xl font-bold text-gray-50">
                  Concept & Funtions
                </span>
                <div
                  className="flex flex-col items-center p-3 my-auto overflow-auto scrollbar-thin scrollbar-track-black-300 scrollbar-thumb-tag"
                  style={{ maxHeight: `40vh` }}
                >
                  {cfs.map((cf) => (
                    <div
                      key={cf.title}
                      className="w-full p-3 mt-3 mr-4 bg-black-100"
                    >
                      <div className="p-2 text-2xl font-extrabold text-center bg-black-400">
                        {cf.title}
                      </div>
                      <div className="px-4 pt-4">
                        {cf.contents.map((content, i) => (
                          <div key={i} className="flex my-1 text-black-900">
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="mt-1 mr-3 text-prime"
                            />
                            <span className="text-lg font-medium">
                              {content}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid items-center grid-cols-2 my-auto justify-items-center">
                  <a target="_blank" rel="noreferrer" href={demo}>
                    <button className="p-2 bg-gray-700 w-36">
                      <FontAwesomeIcon icon={faEye} className="mr-3" />
                      DEMO
                    </button>
                  </a>
                  <a target="_blank" rel="noreferrer" href={code}>
                    <button className="p-2 bg-gray-700 w-36">
                      <FontAwesomeIcon icon={faCode} className="mr-3" />
                      CODE
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
