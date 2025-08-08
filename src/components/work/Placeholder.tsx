import Image from "next/image";
import Link from "next/link";

const Placeholder = () => {
  return (
    <figure className="flex flex-col gap-4 border-1 w-[300px] h-[400px] p-4">
      <h3>PLACEHOLDER</h3>
      <Link href="https://www.place-holder.site">
        <Image
          src="/placeholder.png"
          width={300}
          height={300}
          alt="플레이스홀더 프로젝트 썸네일"
          className=""
        />
      </Link>

      <figcaption className="">
        <div>2024.11 ~ 2025.08</div>
        <div>BE 1명, FE 3명</div>
        <p className="flex flex-wrap gap-1">
          <span className="bg-black text-white rounded p-1 text-sm">
            Next.js
          </span>
          <span className="bg-black text-white rounded p-1 text-sm">
            RestAPI
          </span>
          <span className="bg-black text-white rounded p-1 text-sm">
            Tailwind
          </span>
          <span className="bg-black text-white rounded p-1 text-sm whitespace-nowrap">
            Redux Toolkit
          </span>
          <span className="bg-black text-white rounded p-1 text-sm">
            TypeScript
          </span>
          <span className="bg-black text-white rounded p-1 text-sm">
            sonner
          </span>
        </p>
      </figcaption>
      <Link href="https://github.com/PlaceholderProject">
        https://github.com/PlaceholderProject
      </Link>
    </figure>
  );
};

export default Placeholder;
