"use client";

import { SKILLS, SKILLS_CATEGORIES } from "@/constants/skills";
import { useState } from "react";
import { MdBuild } from "react-icons/md";

const Skills = () => {
  const [type, setType] = useState("all");

  const isActive = (cat: string) => type === cat || type === "all";

  const changeType = (type: string) => {
    setType(type);
  };

  return (
    <section
      aria-label="skills"
      className="w-full h-screen flex flex-col justify-center items-center gap-6"
    >
      <h2 className="text-lg md:text-2xl lg:text-3xl font-[700]">Skills</h2>
      <div className="flex flex-row md:flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-6 ">
          {SKILLS_CATEGORIES.map((category) => {
            return (
              <button
                key={category.id}
                onClick={() => changeType(category.id)}
                className="hover:bg-lime-200 md:text-md lg:text-base text-sm font-[500]"
                type="button"
              >
                {category.text}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-3 gap-4 items-center">
          {SKILLS.map((skill) => {
            const Icon = skill.icon;
            const active = isActive(skill.category);
            console.log(Icon);
            return (
              <div
                key={skill.name}
                className={`${
                  active
                    ? "bg-lime-200 text-black"
                    : "bg-zinc-100 text-zinc-500"
                } flex items-center gap-2 py-1 rounded px-2 text-sm font-[200]`}
              >
                {Icon ? (
                  <Icon size={18} aria-hidden />
                ) : (
                  <MdBuild size={18} aria-hidden />
                )}
                <span className="hidden md:block">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
