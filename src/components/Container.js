import Tag from "./Tag";

const Container = ({ left, right }) => {
  return (
    <div className="my-10 w-full relative">
      <Tag top="0" left="10" text="html" />
      <Tag top="5" left="16" text="body" />

      <div className="w-full h-full grid grid-cols-2 justify-items-center items-center">
        <div className="flex justify-center items-center w-full h-full">
          {left}
        </div>
        <div>{right}</div>
      </div>

      <Tag bottom="5" left="16" text="/body" />
      <Tag bottom="0" left="10" text="/html" />
    </div>
  );
};

export default Container;
