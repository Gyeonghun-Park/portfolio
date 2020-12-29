const IconTag = ({ icon, url }) => {
  return (
    <a href={url}>
      <img src={icon} alt={icon} />
    </a>
  );
};

export default IconTag;
