"use client";

import Image from "next/image";
import { useState } from "react";

const ProfileImage = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  console.log(isInfoOpen);

  return (
    <div
      className={`${
        isInfoOpen
          ? "w-4/5 flex items-center justify-center gap-4"
          : "w-[200px]"
      }`}
    >
      <div className="group relative w-[200px] h-[230px] rounded-4xl overflow-hidden">
        <Image
          src="/profile.png"
          width={200}
          height={200}
          alt="프로필이미지"
          className="object-cover w-full h-full transition duration-300 group-hover:blur-sm"
        />
        <div
          onClick={() => {
            setIsInfoOpen(!isInfoOpen);
          }}
          className="absolute inset-0 flex items-center justify-center bg-opacity-40 text-white text-lg opacity-0 transition duration-300 group-hover:opacity-100"
        >
          더 알아보기
        </div>
      </div>
      {isInfoOpen && (
        <div className="">
          <div>2011.02 계원예술고등학교 조소과 졸업</div>
          <div>2018.02 서울시립대학교 환경조각학과 졸업</div>
          <div>2024.08 내일배움캠프 React 5기 수료</div>
          <div>2025.02~2025.03 블록스푼 인턴 경험</div>
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
