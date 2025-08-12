import React from "react";
import Keyword from "./Keyword";
import AboutText from "./AboutText";
import Skills from "./Skills";

const AboutArea = () => {
  return (
    <section aria-label="about">
      <Keyword />
      <AboutText />
      <Skills />
    </section>
  );
};

export default AboutArea;
