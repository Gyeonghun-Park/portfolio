import clsx from "clsx";
import Tag from "./Tag";

const Container = ({ left, right }) => {
  return (
    <div className="relative w-full my-10 animate__animated animate__fadeIn animate__slow">
      <Tag top="0" left="10" text="html" />
      <Tag top="5" left="16" text="body" />

      <div
        className={clsx(
          "w-full h-full grid grid-rows-2 justify-items-center items-center",
          "xl:grid-cols-2 xl:grid-rows-1 "
        )}
      >
        <div
          className={clsx(
            "items-center justify-center w-full h-full overflow-scroll",
            "xl:mt-0 xl:flex xl:overflow-hidden"
          )}
        >
          {left}
        </div>
        <div className="flex items-center justify-center w-full h-full overflow-hidden">
          {right}
        </div>
      </div>

      <Tag bottom="5" left="16" text="/body" />
      <Tag bottom="0" left="10" text="/html" />
    </div>
  );
};

export default Container;
