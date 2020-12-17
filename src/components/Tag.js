const Tag = ({ top, left, bottom, text }) => {
  return (
    <span
      className={`absolute font-tag text-tag
      ${top ? `top-${top}` : ""}
      ${bottom ? `bottom-${bottom}` : ""}
      ${left ? `left-${left}` : ""}`}
    >
      &lt;{text}&gt;
    </span>
  );
};

export default Tag;
