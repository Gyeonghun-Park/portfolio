import clsx from "clsx";

const Tag = ({ top, left, bottom, text }) => {
  return (
    <span
      className={clsx(
        `absolute font-tag text-tag text-xs
      ${top ? `top-${top}` : ""}
      ${bottom ? `bottom-${bottom}` : ""}
      ${left ? `left-${left}` : ""}`,
        "lg:text-xl"
      )}
    >
      &lt;{text}&gt;
    </span>
  );
};

export default Tag;
