import AboutArea from "@/components/about/AboutArea";
import ContactArea from "@/components/contact/ContactArea";
import Intro from "@/components/Intro";
import ProjectArea from "@/components/project/ProjectArea";

const page = () => {
  return (
    <div>
      <Intro />
      <AboutArea />
      <ProjectArea />
      <ContactArea />
    </div>
  );
};

export default page;
