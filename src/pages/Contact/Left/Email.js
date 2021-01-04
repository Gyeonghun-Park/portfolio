import emailjs from "emailjs-com";
import TextCotainer from "../../../components/TextCotainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Email.css";

const Email = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        () => {
          notifySuccess();
        },
        () => {
          notifyFail();
        }
      );

    e.target.reset();
  };

  const notifySuccess = () => {
    toast("Your e-mail has been successfully sent. Thank You!", {
      className: "shadow-2xl",
    });
  };

  const notifyFail = () => {
    toast.error(
      "Failed to send your message. Please try later or contact me directly gp112795@gmail.com.",
      {
        className: "shadow-2xl",
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center pb-20">
      <ToastContainer
        bodyClassName={() => "text-sm text-white font-medium block p-4"}
        position="bottom-right"
      />
      <div className="flex flex-col items-center ">
        <div className="w-10/12">
          <TextCotainer sentences={["Contact me"]} isTitle />
        </div>
        <div className="w-9/12 mt-5 ml-2 text-3xl font-bold text-gray-100">
          Let's make something great!
        </div>
        <div className="w-9/12 my-8 ml-2 text-gray-300">
          I'm seeking out opportunities to work with companies / agencies /
          individuals. We can work together to solve real business-problems in a
          way that optimizes all of our respective experience and knowledge! If
          you have other request or question, don’t hesitate to contact me using
          below form either.
        </div>
        <div className="w-9/12">
          <form className="grid grid-cols-2 gap-3" onSubmit={sendEmail}>
            <div className="relative overflow-hidden animate__animated animate__fadeInUp animate__faster">
              <input
                name="name"
                placeholder="Name"
                type="text"
                className="w-full h-12 px-5 font-light text-gray-200 rounded-sm outline-none bg-input"
              />
              <label className="after:content"></label>
            </div>

            <div className="relative overflow-hidden animate__animated animate__fadeInUp animate__faster">
              <input
                name="email"
                placeholder="Email"
                type="email"
                required
                className="w-full h-12 px-5 font-light text-gray-200 rounded-sm outline-none bg-input"
              />
              <label className="after:content"></label>
            </div>

            <div className="relative col-span-2 overflow-hidden animate__animated animate__fadeInUp">
              <input
                name="subject"
                placeholder="Subject"
                type="text"
                className="w-full h-12 px-5 font-light text-gray-200 rounded-sm outline-none bg-input"
              />
              <label className="after:content"></label>
            </div>

            <div className="relative col-span-2 overflow-hidden animate__animated animate__fadeInUp animate__slow">
              <textarea
                name="message"
                placeholder="Message"
                required
                className="w-full p-5 font-light text-gray-200 rounded-sm outline-none bg-input h-44"
              />
              <label className="after:content"></label>
            </div>

            <button className="w-20 col-start-2 py-2 transition-colors text-prime justify-self-end ring-1 ring-prime ring-opacity-75 animate__animated animate__fadeInUp animate__slower focus:outline-none hover:bg-prime hover:text-home ">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
