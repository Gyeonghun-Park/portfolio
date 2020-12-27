import IconTag from "./IconTag";

const IconList = ({ icons }) => {
  return (
    <ul id="tags">
      {icons.map((icon) => (
        <li className="absolute">
          <IconTag icon={icon} url={"/qwe"} />
        </li>
      ))}
    </ul>
  );
};

export default IconList;
