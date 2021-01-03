import IconTag from "./IconTag";

const IconList = ({ icons }) => {
  return (
    <ul id="tags">
      {icons.map((icon) => (
        <li className="absolute" key={icon.name}>
          <IconTag icon={icon.icon} url={icon.path} />
        </li>
      ))}
    </ul>
  );
};

export default IconList;
