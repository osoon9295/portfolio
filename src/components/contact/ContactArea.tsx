import ContactText from "./ContactText";
import Links from "./Links";

const ContactArea = () => {
  return (
    <section
      aria-label="contact"
      className="w-full h-screen flex flex-col items-center justify-center"
    >
      <ContactText />
      <Links />
    </section>
  );
};

export default ContactArea;
