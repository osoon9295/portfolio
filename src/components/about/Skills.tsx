"use client";

import React, { useState } from "react";

const SKILL_CATEGORIES = [
  { id: "all", name: "All" },
  { id: "language", name: "Language" },
  { id: "framework/library", name: "Framework/Library" },
  { id: "styling", name: "Styling" },
  { id: "api/database", name: "API/Database" },
  { id: "etc", name: "ETC" },
];

const SKILLS = [
  { name: "JavaScript", category: "language" },
  { name: "HTML5", category: "language" },
  { name: "CSS3", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "React", category: "framework/library" },
  { name: "Next.js", category: "framework/library" },
  { name: "Redux", category: "framework/library" },
  { name: "Zustand", category: "framework/library" },
  { name: "TanStack Query", category: "framework/library" },
  { name: "Tailwind CSS", category: "styling" },
  { name: "Styled-component", category: "styling" },
  { name: "Radix UI", category: "styling" },
  { name: "Axios", category: "api/database" },
  { name: "Fetch", category: "api/database" },
  { name: "GitHub", category: "etc" },
  { name: "Vercel", category: "etc" },
  { name: "ESLint", category: "etc" },
  { name: "Prettier", category: "etc" },
  { name: "Jira", category: "etc" },
  { name: "Slack", category: "etc" },
  { name: "Notion", category: "etc" },
  { name: "Figma", category: "etc" },
];

const Skills = () => {
  const [type, setType] = useState("all");

  return (
    <section
      aria-label="skills"
      className="w-full h-screen flex flex-col justify-center items-center"
    >
      <h2>Skills</h2>
      <div className="flex flex-row gap-6 ">
        {SKILL_CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setType(category.id)}
            className="hover:bg-red-300"
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="w-2/3 grid grid-cols-5 gap-4 items-center">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className={`${
              type === "all" || type === skill.category
                ? "bg-black"
                : "bg-gray-300"
            } text-white w-fit rounded px-2 whitespace-nowrap`}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
