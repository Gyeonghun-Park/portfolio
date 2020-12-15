const Container = () => {
  //drag prevnet
  return (
    <div className="my-10 relative">
      <span class="absolute top-0 left-10 font-tag text-tag text">
        &lt;html&gt;
      </span>
      <span class="absolute top-5 left-16 font-tag text-tag text">
        &lt;body&gt;
      </span>
      <span class="absolute bottom-5 left-16 font-tag text-tag">
        &lt;/body&gt;
      </span>
      <span class="absolute bottom-0 left-10 font-tag text-tag">
        &lt;/html&gt;
      </span>
    </div>
  );
};

export default Container;
