import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiGithub, SiVelog } from "react-icons/si";

const Links = () => {
  return (
    <div className="flex flex-row w-1/2 justify-between">
      <div className="flex flex-row gap-4">
        <Link href="https://github.com/osoon9295">
          <SiGithub />
        </Link>
        <Link href="https://velog.io/@genuss040822">
          <SiVelog />
        </Link>
      </div>

      <div className="">
        <div className="flex flex-row items-center gap-2">
          <IoIosMail />
          osoon9295@gmail.com
        </div>
        <div className="flex flex-row items-center gap-2">
          <FaPhone />
          01032979295
        </div>
      </div>
    </div>
  );
};

export default Links;
