"use client";

import React, { useState } from "react";

const Skills = () => {
  const [type, setType] = useState("all");

  const changeType = (type: string) => {
    setType(type);
  };

  return (
    <section
      aria-label="skills"
      className="w-full h-screen flex flex-col justify-center items-center"
    >
      <h2>Skills</h2>
      <div className="flex flex-row gap-6 ">
        <button
          onClick={() => changeType("language")}
          className="hover:bg-red-300"
        >
          Language
        </button>
        <button onClick={() => changeType("framework/library")}>
          Framework/Library
        </button>
        <button onClick={() => changeType("styling")}> Styling</button>
        <button onClick={() => changeType("api/database")}>
          VCS 및 협업도구
        </button>
        <button onClick={() => changeType("etc")}>ETC</button>
      </div>
      <div className="w-2/3 grid grid-cols-5 gap-4 items-center">
        <div
          className={`${
            type === "language" || type === "all" ? "bg-black" : "bg-gray-300"
          } text-white w-fit rounded px-2`}
        >
          JavaScript
        </div>
        <div
          className={`${
            type === "language" || type === "all" ? "bg-black" : "bg-gray-300"
          } text-white w-fit rounded px-2`}
        >
          HTML5
        </div>
        <div
          className={`${
            type === "language" || type === "all" ? "bg-black" : "bg-gray-300"
          } text-white w-fit rounded px-2`}
        >
          CSS3
        </div>
        <div
          className={`${
            type === "language" || type === "all" ? "bg-black" : "bg-gray-300"
          } text-white w-fit rounded px-2`}
        >
          TypeScript
        </div>
        <div
          className={`${
            type === "framework/library" || type === "all"
              ? "bg-black"
              : "bg-gray-300"
          } text-white w-fit rounded px-2`}
        >
          React
        </div>
        <div
          className={`${
            type === "framework/library" || type === "all"
              ? "bg-black"
              : "bg-gray-300"
          } text-white w-fit rounded px-2`}
        >
          Next.js
        </div>
        <div
          className={`${
            type === "framework/library" || type === "all"
              ? "bg-black"
              : "bg-gray-300"
          } text-white w-fit rounded px-2`}
        >
          Redux
        </div>
        <div
          className={`${
            type === "framework/library" || type === "all"
              ? "bg-black"
              : "bg-gray-300"
          } text-white w-fit rounded px-2`}
        >
          Zustand
        </div>
        <div
          className={`${
            type === "framework/library" || type === "all"
              ? "bg-black"
              : "bg-gray-300"
          } text-white w-fit rounded px-2`}
        >
          TanStack Query
        </div>
        <div
          className={`${
            type === "styling" || type === "all" ? "bg-black" : "bg-gray-300"
          } text-white w-fit rounded px-2 whitespace-nowrap`}
        >
          Tailwind CSS
        </div>
        <div
          className={`${
            type === "styling" || type === "all" ? "bg-black" : "bg-gray-300"
          } text-white w-fit rounded px-2 whitespace-nowrap`}
        >
          Styled-component
        </div>
        <div
          className={`${
            type === "styling" || type === "all" ? "bg-black" : "bg-gray-300"
          } text-white w-fit rounded px-2 whitespace-nowrap`}
        >
          Radix UI
        </div>
        <div
          className={`${
            type === "api/database" || type === "all"
              ? "bg-black"
              : "bg-gray-300"
          } text-white w-fit rounded px-2 whitespace-nowrap`}
        >
          Axios
        </div>
        <div
          className={`${
            type === "api/database" || type === "all"
              ? "bg-black"
              : "bg-gray-300"
          } text-white w-fit rounded px-2 whitespace-nowrap`}
        >
          Fetch
        </div>
        <div
          className={`${
            type === "etc" || type === "all" ? "bg-black" : "bg-gray-300"
          } text-white w-fit rounded px-2 whitespace-nowrap`}
        >
          GitHub
        </div>
        <div
          className={`${
            type === "etc" || type === "all" ? "bg-black" : "bg-gray-300"
          } text-white w-fit rounded px-2 whitespace-nowrap`}
        >
          Vercel
        </div>
        <div
          className={`${
            type === "etc" || type === "all" ? "bg-black" : "bg-gray-300"
          } text-white w-fit rounded px-2 whitespace-nowrap`}
        >
          ESLint
        </div>
        <div
          className={`${
            type === "etc" || type === "all" ? "bg-black" : "bg-gray-300"
          } text-white w-fit rounded px-2 whitespace-nowrap`}
        >
          Prettier
        </div>
        <div
          className={`${
            type === "etc" || type === "all" ? "bg-black" : "bg-gray-300"
          } text-white w-fit rounded px-2 whitespace-nowrap`}
        >
          Jira
        </div>
        <div
          className={`${
            type === "etc" || type === "all" ? "bg-black" : "bg-gray-300"
          } text-white w-fit rounded px-2 whitespace-nowrap`}
        >
          Slack
        </div>
        <div
          className={`${
            type === "etc" || type === "all" ? "bg-black" : "bg-gray-300"
          } text-white w-fit rounded px-2 whitespace-nowrap`}
        >
          Notion
        </div>
        <div
          className={`${
            type === "etc" || type === "all" ? "bg-black" : "bg-gray-300"
          } text-white w-fit rounded px-2 whitespace-nowrap`}
        >
          Figma
        </div>
      </div>
    </section>
  );
};

export default Skills;
