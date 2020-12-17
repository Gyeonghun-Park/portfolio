import Tag from "./Tag";

const Container = () => {
  //drag prevnet
  return (
    <div className="my-10 w-full relative">
      <Tag top="0" left="10" text="html" />
      <Tag top="5" left="16" text="body" />

      <Tag bottom="5" left="16" text="/body" />
      <Tag bottom="0" left="10" text="/html" />
    </div>
  );
};

export default Container;
