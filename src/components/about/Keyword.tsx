import Image from "next/image";
import React from "react";

const Keyword = () => {
  return (
    <section
      className="w-full h-[50vh] flex flex-col items-center justify-center gap-4 "
      aria-label="keyword"
    >
      <div className="w-[200px] h-[230px] rounded-2xl bg-red-50 overflow-hidden">
        <Image src="/profile.png" width={200} height={200} alt="프로필이미지" />
      </div>

      <div className="flex flex-row gap-4">
        <div className="w-fit"># 도전 정신</div>
        <div className="w-fit"># 구현의 즐거움</div>
        <div className="w-fit"># 협업</div>
      </div>
    </section>
  );
};

export default Keyword;
