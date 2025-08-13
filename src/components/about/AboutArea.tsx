import React from "react";
import Keyword from "./Keyword";
import AboutText from "./AboutText";
import Skills from "./Skills";
import ProfileImage from "./ProfileImage";

const AboutArea = () => {
  return (
    <section aria-label="about" className="w-fill">
      <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
        <ProfileImage />
        <Keyword />
        <AboutText />
      </div>
      <Skills />
    </section>
  );
};

export default AboutArea;
