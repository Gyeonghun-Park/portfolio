import clsx from "clsx";
import Tag from "./Tag";

const Container = ({ left, right }) => {
  return (
    <div className="my-10 w-full relative animate__animated animate__fadeIn animate__slow">
      <Tag top="0" left="10" text="html" />
      <Tag top="5" left="16" text="body" />

      <div
        className={clsx(
          "w-full h-full grid grid-rows-2 justify-items-center items-center",
          "xl:grid-cols-2 xl:grid-rows-1"
        )}
      >
        <div className="flex justify-center items-center w-full h-full">
          {left}
        </div>
        <div className="flex justify-center items-center w-full h-full">
          {right}
        </div>
      </div>

      <Tag bottom="5" left="16" text="/body" />
      <Tag bottom="0" left="10" text="/html" />
    </div>
  );
};

export default Container;
