const Card = ({ num }) => {
  return (
    <div
      className="absolute top-0 left-0 bg-purple-400 ring-gray-700 ring-1"
      style={{ width: 310, height: 220 }}
    >
      {num}
    </div>
  );
};

export default Card;
