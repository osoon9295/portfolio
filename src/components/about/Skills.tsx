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
      className="w-full h-screen flex flex-col justify-center items-center gap-4"
    >
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="flex flex-row gap-6 ">
        {SKILLS_CATEGORIES.map((category) => {
          return (
            <button
              key={category.id}
              onClick={() => changeType(category.id)}
              className="hover:bg-lime-200"
              type="button"
            >
              {category.text}
            </button>
          );
        })}
      </div>
      <div className="w-3/5 grid grid-cols-3 gap-4 items-center">
        {SKILLS.map((skill) => {
          const Icon = skill.icon;
          const active = isActive(skill.category);
          console.log(Icon);
          return (
            <div
              key={skill.name}
              className={`${
                active ? "bg-lime-200 text-black" : "bg-zinc-100 text-zinc-500"
              } flex items-center gap-2 py-1 rounded px-2 text-sm`}
            >
              {Icon ? (
                <Icon size={18} aria-hidden />
              ) : (
                <MdBuild size={18} aria-hidden />
              )}
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
