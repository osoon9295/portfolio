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
    positionClass: "fixed left-[25%] top-[25%]",
  },
  {
    id: "skill",
    Icon: IoPlanetSharp,
    label: "Skill section",
    positionClass: "fixed left-[50%] top-[70%]",
  },
  {
    id: "project",
    Icon: GiJupiter,
    label: "Project section",
    positionClass: "fixed left-[80%] top-[50%]",
  },
  {
    id: "contact",
    Icon: RiSpaceShipFill,
    label: "Contact section",
    positionClass: "fixed left-[60%] top-[30%]",
  },
];

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
    <nav
      className={
        stacked
          ? "fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6"
          : "pointer-events-none"
      }
    >
      {NAV_ITEMS.map(({ id, Icon, label, positionClass }) => (
        <button
          type="button"
          key={id}
          onClick={() => go(id)}
          aria-label={label}
          className={`cursor-pointer text-4xl transition-colors hover:text-lime-500 ${
            stacked
              ? "pointer-events-auto"
              : `${positionClass} pointer-events-auto`
          }`}
        >
          <Icon />
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
