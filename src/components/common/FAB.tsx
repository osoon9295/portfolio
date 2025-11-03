"use client";

import Image from "next/image";
// import Link from "next/link";
import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
// import { IoIosMail } from "react-icons/io";
// import { SiGithub, SiVelog } from "react-icons/si";

const FloatingActionButton = () => {
  const [isActive, setIsActive] = useState(false);

  console.log("isActive", isActive);

  return (
    <div className="group fixed bottom-6 right-6">
      {isActive && (
        <div className="absolute -top-10 w-full flex justify-center text-black text-[2rem] z-20 bg-amber-100">
          <IoIosMail />
        </div>
      )}
      <div className="w-[3.5rem] h-[3.5rem] md:w-[7rem] md:h-[7rem] shadow-xl rounded-full overflow-hidden bg-[#AFBC90] relative">
        <Image
          alt="아바타이미지"
          src="/avatar.jpeg"
          className="object-cover w-full h-full transition duration-300 group-hover:opacity-50"
          fill
        />
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="absolute inset-0 flex items-center justify-center bg-opacity-40 text-white text-lg opacity-0 transition duration-300 group-hover:opacity-100"
        >
          연락하기
        </div>
      </div>
    </div>
  );
};

export default FloatingActionButton;
