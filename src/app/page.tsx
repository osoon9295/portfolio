import AboutText from "@/components/about/AboutText";
import Keyword from "@/components/about/Keyword";
import Skills from "@/components/about/Skills";
import Intro from "@/components/Intro";
import React from "react";

const page = () => {
  return (
    <div>
      <Intro />
      <Keyword />
      <AboutText />
      <Skills />
    </div>
  );
};

export default page;
