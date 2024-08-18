import { useTranslations } from "next-intl";
import Image from "next/image";
import Logo from "../logo/Logo";

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <section
      id="home"
      className="relative flex items-end  justify-center md:justify-start md:items-center h-screen bg-background md:pl-12"
    >
      <div className="w-full lg:hidden h-full bg-background opacity-60 absolute left-0 z-30 "></div>
      <Logo />
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
    </section>
  );
};
export default Hero;
