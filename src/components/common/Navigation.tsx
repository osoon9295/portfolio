import React from "react";
import { GiJupiter } from "react-icons/gi";
import { IoPlanetOutline, IoPlanetSharp } from "react-icons/io5";
import { RiSpaceShipFill } from "react-icons/ri";

const Navigation = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="fixed left-[20%] top-[20%] text-4xl">
        <IoPlanetOutline />
      </div>
      <div className="fixed left-[50%] top-[70%] text-4xl">
        <IoPlanetSharp />
      </div>
      <div className="fixed left-[80%] top-[50%] text-4xl">
        <GiJupiter />
      </div>
      <div className="fixed left-[60%] top-[30%] text-4xl">
        <RiSpaceShipFill />
      </div>
    </div>
  );
};

export default Navigation;
