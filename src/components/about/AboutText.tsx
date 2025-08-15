const AboutText = () => {
  return (
    <section
      className="flex flex-col justify-start items-center text-center px-4"
      aria-label="about-text"
    >
      <p className="text-base md:text-lg font-bold mb-4">
        새로운 영역을 탐험하는 것을 즐기는 미대생 출신 프론트엔드 개발자입니다.
      </p>
      <p className="text-base md:text-lg leading-relaxed">
        아이디어가 코드로 구현되는 과정에 매력을 느껴, 주저 없이 부딪히고 만들고
        고치며 성장해왔습니다.
        <br />
        <strong className="font-bold">협업</strong> 속에서 의견을 조율하고{" "}
        <strong className="font-bold">책임</strong>을 다하는 것을 소중히 여기는
        개발자가 되고자 합니다.
      </p>
    </section>
  );
};

export default AboutText;
