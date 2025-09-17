import React from "react";
import { PiAsteriskBold } from "react-icons/pi";

interface IntroProps {
  id?: string;
}

const Intro = ({ id }: IntroProps) => {
  return (
    <section
      id={id}
      aria-label="intro"
      className="relative w-full h-screen flex flex-col md:flex-row justify-center items-center text-center px-4 gap-6 snap-start"
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

      <div className="absolute left-[10%] top-[60%] text-4xl">
        <PiAsteriskBold />
      </div>
      <div className="absolute left-[85%] top-[20%] text-4xl">
        <PiAsteriskBold />
      </div>
      <div className="absolute left-[40%] top-[15%] text-4xl">
        <PiAsteriskBold />
      </div>
      <div className="absolute left-[35%] top-[80%] text-4xl">
        <PiAsteriskBold />
      </div>
      <div className="absolute left-[70%] top-[85%] text-4xl">
        <PiAsteriskBold />
      </div>
    </section>
  );
};

export default Intro;
