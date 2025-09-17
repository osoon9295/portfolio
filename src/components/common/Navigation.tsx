"use client";
import React from "react";
import { GiJupiter } from "react-icons/gi";
import { IoPlanetOutline, IoPlanetSharp } from "react-icons/io5";
import { RiSpaceShipFill } from "react-icons/ri";

const Navigation = () => {
  const go = (id: string) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div>
      <div
        className="fixed left-[25%] top-[25%] text-4xl cursor-pointer hover:text-lime-500"
        onClick={() => go("about")}
      >
        <IoPlanetOutline />
      </div>
      <div
        className="fixed left-[50%] top-[70%] text-4xl"
        onClick={() => go("skill")}
      >
        <IoPlanetSharp />
      </div>
      <div
        className="fixed left-[80%] top-[50%] text-4xl"
        onClick={() => go("project")}
      >
        <GiJupiter />
      </div>
      <div
        className="fixed left-[60%] top-[30%] text-4xl"
        onClick={() => go("contact")}
      >
        <RiSpaceShipFill />
      </div>
    </div>
  );
};

export default Navigation;
