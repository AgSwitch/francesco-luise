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
      <div className="w-full lg:hidden h-full absolute left-0 z-30 bg-white opacity-20"></div>
      <Logo />
      {/* mobile */}
      <div className=" w-fit h-fit absolute bottom-0 right-0 flex xl:hidden">
        <Image
          draggable={false}
          src={"/hero.png"}
          className="object-cover h-screen md:h-fit md:object-contain drop-shadow-4xl"
          alt="Francesco Luise"
          width={650}
          height={650}
          priority
        />
      </div>
      {/* desktop */}
      <div className=" w-1/2 h-screen absolute bottom-0 right-0 hidden xl:flex">
        <div className="relative w-full h-full">
        <Image
          draggable={false}
          src={"/hero.png"}
          className="object-cover h-screen md:h-fit md:object-contain drop-shadow-4xl"
          alt="Francesco Luise"
          fill
          priority
          />
          </div>
      </div>
    </section>
  );
};
export default Hero;
