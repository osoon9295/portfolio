const ContactText = () => {
  return (
    <section
      aria-label="contact-text"
      className=" w-5/6 flex flex-col items-center lg:text-lg md:text-base text-sm gap-2 md:gap-0"
    >
      <div className="flex flex-col md:flex-row items-center">
        <div>무언가를 스스로 만들어 낸다는 건 &nbsp;</div>
        <div>언제나 저를 움직이게 합니다.</div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div>새로운 기술에 도전하고,&nbsp;</div>
        <div>작은 구현 하나에도 몰입하는 즐거움이&nbsp;</div>
        <div>저를 성장시켜왔습니다.</div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div>함께 만드는 경험 속에서 &nbsp;</div>
        <div>더 멀리 나아갈 수 있다고 믿습니다.</div>
      </div>
      <div className="mt-2 font-bold flex flex-col md:flex-row items-center">
        <div>도전과 협업을 통해&nbsp;</div>
        <div>더 나은 서비스를 만드는 개발자가 되겠습니다.</div>
      </div>
    </section>
  );
};

export default ContactText;
