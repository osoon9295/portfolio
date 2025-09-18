import Image from "next/image";
// import Link from "next/link";
import React from "react";
// import { IoIosMail } from "react-icons/io";
// import { SiGithub, SiVelog } from "react-icons/si";

const Card = () => {
  return (
    <div className="fixed bottom-6 right-6 w-[4rem] h-[4rem] md:w-[7rem] md:h-[7rem] shadow-xl rounded-full overflow-hidden ">
      <Image
        // width={500}
        // height={500}
        alt="아바타이미지"
        src="/avatar.jpeg"
        fill
      />
      {/* <div className="flex flex-row gap-4 text-3xl items-center text-lime-800">
        <Link href="https://github.com/osoon9295">
          <SiGithub />
        </Link>
        <Link href="https://velog.io/@genuss040822">
          <SiVelog />
        </Link>
        <a
          href="mailto:osoon9295@gmail.com?subject=포트폴리오 문의&body=안녕하세요!"
          className="contact-button text-4xl"
        >
          <IoIosMail />
        </a>
      </div> */}
    </div>
  );
};

export default Card;
