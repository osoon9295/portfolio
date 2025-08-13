import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="w-[200px] h-[230px] rounded-4xl bg-red-50 overflow-hidden">
      <Image src="/profile.png" width={200} height={200} alt="프로필이미지" />
    </div>
  );
};

export default ProfileImage;
