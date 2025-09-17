import AboutArea from "@/components/about/AboutArea";
import Skills from "@/components/about/Skills";
import Card from "@/components/common/Card";
import Navigation from "@/components/common/Navigation";
import ContactArea from "@/components/contact/ContactArea";
import Intro from "@/components/Intro";
import ProjectArea from "@/components/project/ProjectArea";

const page = () => {
  return (
    <div className="relative snap-y snap-mandatory h-screen overflow-y-scroll">
      <Intro id="intro" />
      <AboutArea id="about" />
      <Skills id="skill" />
      <ProjectArea id="project" />
      <ContactArea id="contact" />
      <Card />
      <Navigation />
    </div>
  );
};

export default page;
