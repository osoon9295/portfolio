"use client";

import { SKILLS, SKILLS_CATEGORIES } from "@/constants/skills";
import React, { useState } from "react";

const Skills = () => {
  const [type, setType] = useState("all");

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
      <div className="w-3/5 grid grid-cols-5 gap-4 items-center">
        {SKILLS.map((skill) => {
          return (
            <div
              key={skill.name}
              className={`${
                type === skill.category || type === "all"
                  ? "bg-black"
                  : "bg-gray-300"
              } text-white w-fit rounded px-2`}
            >
              {skill.name}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
