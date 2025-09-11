"use client";
import React from "react";
import { GiJupiter } from "react-icons/gi";
import { IoPlanetOutline, IoPlanetSharp } from "react-icons/io5";
import { RiSpaceShipFill } from "react-icons/ri";

const Navigation = () => {
  const handleScroll = (page: number) => {
    window.scrollTo({
      top: window.innerHeight * page,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        className="fixed left-[25%] top-[25%] text-4xl cursor-pointer"
        onClick={() => handleScroll(1)}
      >
        <IoPlanetOutline />
      </div>
      <div
        className="fixed left-[50%] top-[70%] text-4xl"
        onClick={() => handleScroll(2)}
      >
        <IoPlanetSharp />
      </div>
      <div
        className="fixed left-[80%] top-[50%] text-4xl"
        onClick={() => handleScroll(3)}
      >
        <GiJupiter />
      </div>
      <div
        className="fixed left-[60%] top-[30%] text-4xl"
        onClick={() => handleScroll(4)}
      >
        <RiSpaceShipFill />
      </div>
    </div>
  );
};

export default Navigation;
