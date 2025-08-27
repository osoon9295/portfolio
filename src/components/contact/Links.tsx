import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { SiGithub, SiVelog } from "react-icons/si";

const Links = () => {
  return (
    <div className="flex flex-row w-1/2 justify-center gap-4">
      <div className="flex flex-row gap-4 text-2xl items-center">
        <Link href="https://github.com/osoon9295">
          <SiGithub />
        </Link>
        <Link href="https://velog.io/@genuss040822">
          <SiVelog />
        </Link>
        <a
          href="mailto:osoon9295@gmail.com?subject=포트폴리오 문의&body=안녕하세요!"
          className="contact-button text-3xl"
        >
          <IoIosMail />
        </a>
      </div>
    </div>
  );
};

export default Links;
