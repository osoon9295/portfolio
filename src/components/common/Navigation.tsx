"use client";
import React, { useEffect, useState } from "react";
import { GiJupiter } from "react-icons/gi";
import { IoPlanetOutline, IoPlanetSharp } from "react-icons/io5";
import { RiSpaceShipFill } from "react-icons/ri";

const NAV_ITEMS = [
  {
    id: "about",
    Icon: IoPlanetOutline,
    label: "About section",
    coords: { left: "25%", top: "25%" },
  },
  {
    id: "skill",
    Icon: IoPlanetSharp,
    label: "Skill section",
    coords: { left: "50%", top: "70%" },
  },
  {
    id: "project",
    Icon: GiJupiter,
    label: "Project section",
    coords: { left: "85%", top: "50%" },
  },
  {
    id: "contact",
    Icon: RiSpaceShipFill,
    label: "Contact section",
    coords: { left: "60%", top: "30%" },
  },
];

const STACK_LEFT = "1.5rem"; // matches Tailwind left-6
const STACK_SPACING = 60; // px spacing between icons when stacked

const Navigation = () => {
  const [stacked, setStacked] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const introSection = document.getElementById("intro");
    if (!introSection) {
      setStacked(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setStacked(!entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(introSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  const go = (id: string) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <nav className="fixed inset-0 pointer-events-none">
      {NAV_ITEMS.map(({ id, Icon, label, coords }, index) => (
        <button
          type="button"
          key={id}
          onClick={() => go(id)}
          aria-label={label}
          className="pointer-events-auto absolute -translate-y-1/2 text-2xl lg:text-3xl transition-all duration-500 ease-in-out hover:text-lime-700"
          style={
            stacked
              ? {
                  left: STACK_LEFT,
                  top: `calc(50% + ${
                    (index - (NAV_ITEMS.length - 1) / 2) * STACK_SPACING
                  }px)`,
                }
              : {
                  left: coords.left,
                  top: coords.top,
                }
          }
        >
          <Icon />
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
