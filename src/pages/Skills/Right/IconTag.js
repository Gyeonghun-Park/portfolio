const IconTag = ({ icon, url }) => {
  return (
    <a target="_blank" href={url}>
      <img src={icon} alt={icon} />
    </a>
  );
};

export default IconTag;
