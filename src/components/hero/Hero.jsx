import { useTranslations } from "next-intl";
import Image from "next/image";

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <div
      id="home"
      className="relative flex items-end  justify-center md:justify-start md:items-center h-screen bg-background md:pl-12"
    >
      <div className="w-full lg:hidden h-full bg-background opacity-60 absolute left-0 z-30 "></div>
      <div className="relative flex flex-col items-center gap-2 md:gap-5 z-40 mb-[100px] md:mb-0">
        <Image
          src={"/logo.png"}
          width={400}
          height={400}
          alt="logo"
          className="absolute top-1/2 -translate-y-1/2 opacity-20"
        />
        <h2 className="text-4xl md:text-6xl font-[300]">{t('title')}</h2>
        <h1 className="text-2xl md:text-4xl font-[300]">{t('description')}</h1>
      </div>
      <div className=" w-fit h-fit absolute bottom-0 right-0">
        <Image
          draggable={false}
          src={"/fluise.png"}
          className="object-cover h-screen md:h-fit md:object-contain"
          alt=""
          width={650}
          height={650}
        />
      </div>
    </div>
  );
};
export default Hero;
