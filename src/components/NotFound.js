const NotFound = () => {
  return (
    <div className="flex justify-center w-full h-full font-bold text-white align-center text-lg">
      <span>Not found 🤔</span>
      <Link to="/" className="underline text-prime">
        back to home
      </Link>
    </div>
  );
};

export default NotFound;
