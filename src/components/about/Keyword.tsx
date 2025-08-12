import React from "react";

const Keyword = () => {
  return (
    <section
      className="w-full h-[50vh] flex flex-row items-end justify-center gap-4 pb-20 "
      aria-label="keyword"
    >
      <div className="bg-red-100 w-fit">도전 정신</div>
      <div className="bg-yellow-100 w-fit">구현의 즐거움</div>
      <div className="bg-green-200 w-fit">협업</div>
    </section>
  );
};

export default Keyword;
