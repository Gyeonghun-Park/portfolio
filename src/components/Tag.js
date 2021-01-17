import clsx from "clsx";

const Tag = ({ top, left, bottom, text }) => {
  return (
    <span
      className={clsx(
        `absolute font-tag text-tag text-xs
      ${top ? (top > 0 ? `top-${top}` : `-top-${Math.abs(top)}`) : ""}
      ${
        bottom
          ? bottom > 0
            ? `bottom-${bottom}`
            : `-bottom-${Math.abs(bottom)}`
          : ""
      }
      ${left ? `left-${left}` : ""}`,
        "lg:text-xl"
      )}
    >
      &lt;{text}&gt;
    </span>
  );
};

export default Tag;
