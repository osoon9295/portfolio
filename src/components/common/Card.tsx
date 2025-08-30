import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosMail } from "react-icons/io";
import { SiGithub, SiVelog } from "react-icons/si";

const Card = () => {
  return (
    <div className="fixed bottom-5 right-5 w-[180px] h-[210px] flex flex-col items-center justify-center gap-5 bg-lime-100 shadow-xl rounded-2xl">
      <div className="w-[110px] rounded-2xl overflow-hidden">
        <Image width={200} height={200} alt="아바타이미지" src="/image.png" />
      </div>
      <div className="flex flex-row gap-4 text-3xl items-center text-lime-800">
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
      </div>
    </div>
  );
};

export default Card;
