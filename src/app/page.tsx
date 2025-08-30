import AboutArea from "@/components/about/AboutArea";
import Card from "@/components/common/Card";
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
    </div>
  );
};

export default page;
