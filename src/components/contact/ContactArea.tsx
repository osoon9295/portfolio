import ContactText from "./ContactText";
import Links from "./Links";

interface ContactAreaProps {
  id?: string;
}

const ContactArea = ({ id }: ContactAreaProps) => {
  return (
    <section
      id={id}
      aria-label="contact"
      className="w-full h-screen flex flex-col items-center justify-center gap-6 snap-start"
    >
      <ContactText />
      <Links />
    </section>
  );
};

export default ContactArea;
