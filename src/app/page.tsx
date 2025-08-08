import AboutArea from "@/components/about/AboutArea";
import ContactArea from "@/components/contact/ContactArea";
import Intro from "@/components/Intro";
import WorkArea from "@/components/work/WorkArea";

const page = () => {
  return (
    <div>
      <Intro />
      <AboutArea />
      <WorkArea />
      <ContactArea />
    </div>
  );
};

export default page;
