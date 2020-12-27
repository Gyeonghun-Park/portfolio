const IconTag = ({ icon, url }) => {
  return (
    <a href={url}>
      <img className="w-16 h-16" src={icon} />
    </a>
  );
};

export default IconTag;
