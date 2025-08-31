import React from "react";
import { GiJupiter } from "react-icons/gi";
import { IoPlanetOutline, IoPlanetSharp } from "react-icons/io5";
import { PiAsteriskBold } from "react-icons/pi";
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
      <div className="absolute left-[10%] top-[60%] text-4xl">
        <PiAsteriskBold />
      </div>
      <div className="absolute left-[85%] top-[20%] text-4xl">
        <PiAsteriskBold />
      </div>
      <div className="absolute left-[40%] top-[15%] text-4xl">
        <PiAsteriskBold />
      </div>
      <div className="absolute left-[35%] top-[80%] text-4xl">
        <PiAsteriskBold />
      </div>
      <div className="absolute left-[70%] top-[85%] text-4xl">
        <PiAsteriskBold />
      </div>
    </div>
  );
};

export default Navigation;
