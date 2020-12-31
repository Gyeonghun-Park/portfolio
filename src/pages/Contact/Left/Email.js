import emailjs from "emailjs-com";
import TextCotainer from "../../../components/TextCotainer";
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
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="w-10/12">
          <TextCotainer sentences={["Contact me"]} isTitle={true} />
        </div>
        <div className="text-white w-9/12 my-8 ml-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
          ultricies ligula. Maecenas lacinia tortor sed urna suscipit mollis. Ut
          pretium lectus ac urna finibus scelerisque ac a turpis. Aliquam quis
          arcu ut urna vulputate lacinia at at ex. Nullam faucibus non arcu in
          mollis.
        </div>
        <div className="w-9/12">
          <form className="grid grid-cols-2 gap-3" onSubmit={sendEmail}>
            <div className="relative overflow-hidden animate__animated animate__fadeInUp animate__faster">
              <input
                name="name"
                placeholder="Name"
                type="text"
                className="bg-input text-gray-200 rounded-sm font-light h-12 px-5 outline-none w-full"
              />
              <label className="after:content"></label>
            </div>

            <div className="relative overflow-hidden animate__animated animate__fadeInUp animate__faster">
              <input
                name="email"
                placeholder="Email"
                type="email"
                required
                className="bg-input text-gray-200 rounded-sm font-light h-12 px-5 outline-none w-full"
              />
              <label className="after:content"></label>
            </div>

            <div className="relative overflow-hidden col-span-2 animate__animated animate__fadeInUp">
              <input
                name="subject"
                placeholder="Subject"
                type="text"
                className="bg-input text-gray-200 rounded-sm font-light h-12 px-5 outline-none w-full"
              />
              <label className="after:content"></label>
            </div>

            <div className="relative overflow-hidden col-span-2 animate__animated animate__fadeInUp animate__slow">
              <textarea
                name="message"
                placeholder="Message"
                required
                className="bg-input text-gray-200 rounded-sm font-light h-44 p-5 outline-none w-full"
              />
              <label className="after:content"></label>
            </div>

            <button className="text-prime py-2 w-20 justify-self-end ring-1 ring-prime ring-opacity-75 outline-none col-start-2 animate__animated animate__fadeInUp animate__slower hover:bg-prime hover:text-home ">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
