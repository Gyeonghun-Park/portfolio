import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center w-full h-full font-bold text-white items-center text-lg">
      <span className="pr-2">Not found 🤔</span>
      <Link to="/" className="underline text-prime">
        {" "}
        Back to Home &rarr;
      </Link>
    </div>
  );
};

export default NotFound;
