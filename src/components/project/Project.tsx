import { ProjectProps } from "@/type/projectType";
import { Skill } from "@/type/skillType";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdBuild } from "react-icons/md";

const Project = ({ project }: { project: ProjectProps }) => {
  return (
    <figure className="flex flex-col gap-4 border-1 w-[300px] h-[400px] p-4 rounded-3xl hover:border-lime-600 hover:text-lime-600">
      <div className="flex flex-row justify-between">
        <h3 className="font-bold">{project.name}</h3>
        <Link href={project.github}>
          <FaGithub size={25} />
        </Link>
      </div>
      <Link
        href={project.webLink}
        className="border-1 rounded-lg overflow-hidden"
      >
        <Image
          src={project.thumbnail}
          width={300}
          height={300}
          alt={`${project.name}프로젝트 썸네일`}
          className=""
        />
      </Link>

      <figcaption className="">
        <div>{project.period}</div>
        <div>{project.participant}</div>
        <ul className="flex flex-wrap gap-2 mt-2">
          {project.skills.map((skill: Skill) => {
            const Icon = skill.icon;
            return (
              <li
                key={skill.name}
                className="bg-lime-200 text-black flex items-center gap-2 p-1 rounded text-[12px]"
              >
                {Icon ? (
                  <Icon size={18} aria-hidden />
                ) : (
                  <MdBuild size={18} aria-hidden />
                )}
                {skill.name}
              </li>
            );
          })}
        </ul>
      </figcaption>
    </figure>
  );
};

export default Project;
