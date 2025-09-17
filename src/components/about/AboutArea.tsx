import Keyword from "./Keyword";
import AboutText from "./AboutText";
import ProfileImage from "./ProfileImage";

interface AboutAreaProps {
  id?: string;
}

const AboutArea = ({ id }: AboutAreaProps) => {
  return (
    <section
      id={id}
      aria-label="about"
      className="w-full h-screen flex flex-col items-center justify-center gap-4 snap-start"
    >
      <ProfileImage />
      <Keyword />
      <AboutText />
    </section>
  );
};

export default AboutArea;
