import AboutArea from "@/components/about/AboutArea";
import Card from "@/components/common/Card";
import Navigation from "@/components/common/Navigation";
import ContactArea from "@/components/contact/ContactArea";
import Intro from "@/components/Intro";
import ProjectArea from "@/components/project/ProjectArea";

const page = () => {
  return (
    <div className="relative">
      <Intro />
      <AboutArea />
      <ProjectArea />
      <ContactArea />
      <Card />
      <Navigation />
    </div>
  );
};

export default page;
