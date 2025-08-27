import React from "react";

const Intro = () => {
  return (
    <section
      aria-label="intro"
      className="w-full h-screen flex flex-col md:flex-row justify-center items-center text-center px-4 gap-6"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
        프론트엔드 개발자 <br />
        이보영 입니다.
      </h1>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed text-zinc-400">
        무언가를 스스로 만들어낸다는 건 <br />
        언제나 저를 움직이게 합니다. <br />
        제가 마음껏 부딪히고, 만들고, 고치며 <br />
        성장할 수 있는 팀을 찾고 있습니다.
      </p>
    </section>
  );
};

export default Intro;
