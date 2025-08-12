import Image from "next/image";
import Link from "next/link";
import React from "react";

const Plantree = () => {
  return (
    <figure className="flex flex-col gap-4 border-1 w-[300px] h-[400px] p-4">
      <h3>PLANTREE</h3>
      <Link href="https://www.plantreeforest.com/" className="">
        <Image
          src="/plantree.png"
          width={300}
          height={300}
          alt="플랜트리 프로젝트 썸네일"
          className=""
        />
      </Link>
      <figcaption className="">
        <div>2024.7~2024.08</div>
        <div>DE 1명, FE 5명</div>
        <p className="flex flex-wrap gap-1">
          <span className="bg-black text-white rounded p-1 text-sm">
            Next.js
          </span>
          <span className="bg-black text-white rounded p-1 text-sm">
            Supabase
          </span>
          <span className="bg-black text-white rounded p-1 text-sm">
            Tailwind
          </span>
          <span className="bg-black text-white rounded p-1 text-sm whitespace-nowrap">
            Zustand
          </span>
          <span className="bg-black text-white rounded p-1 text-sm">
            TypeScript
          </span>
          <span className="bg-black text-white rounded p-1 text-sm">
            sweetalert2
          </span>
        </p>
      </figcaption>
      <Link href="https://github.com/osoon9295/plantree">
        https://github.com/osoon9295/plantree
      </Link>
    </figure>
  );
};

export default Plantree;
