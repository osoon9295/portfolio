const AboutText = () => {
  return (
    <section
      className="flex flex-col justify-start items-center text-center px-4"
      aria-label="about-text"
    >
      <div className="flex flex-col md:flex-row text-sm md:text-base lg:text-lg font-bold mb-4">
        <div>새로운 영역을 탐험하는 것을 즐기는&nbsp;</div>
        <div>미대생 출신 프론트엔드 개발자입니다.</div>
      </div>
      <div className="text-sm md:text-base lg:text-lg leading-relaxed">
        <div className="flex flex-col md:flex-row justify-center">
          <div>아이디어가 코드로 구현되는 과정에 매력을 느껴,</div>
          <div>주저 없이 부딪히고 만들고 고치며 성장해왔습니다.</div>
        </div>
        <div className="flex flex-col md:flex-row justify-center">
          <div>
            <strong className="font-bold">협업</strong> 속에서 의견을
            조율하고&nbsp;
          </div>
          <div>
            <strong className="font-bold">책임</strong>을 다하는 것을 소중히
            여기는 개발자가 되겠습니다.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutText;
