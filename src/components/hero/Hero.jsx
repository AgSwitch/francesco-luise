import Image from "next/image";
import Logo from "../logo/Logo";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-end bg-logo bg-contain bg-no-repeat bg-center lg:bg-none  justify-center md:justify-start md:items-center h-[100dvh] bg-background md:pl-12"
    >
      <div className="w-full lg:hidden h-full absolute left-0 z-30 bg-onprimary opacity-[0.25]"></div>
        <Logo className="block lg:hidden" noImage />
        <Logo className="hidden lg:flex"/>
      {/* mobile */}
      <div className=" w-fit h-fit absolute bottom-0 right-0 flex xl:hidden">
        <Image
          draggable={false}
          src={"/hero.webp"}
          className="object-cover h-screen md:h-fit md:object-contain drop-shadow-4xl"
          alt="Francesco Luise"
          width={650}
          height={650} 
          quality={100}
          priority
        />
      </div>
      {/* desktop */}
      <div className=" w-1/2 h-screen absolute bottom-0 right-0 hidden xl:flex">
        <div className="relative w-full h-full">
        <Image
          draggable={false}
          src={"/hero.webp"}
          className="object-cover h-screen md:h-fit md:object-contain drop-shadow-4xl"
          alt="Francesco Luise"
          fill
          quality={100}
          priority
          />
          </div>
      </div>
    </section>
  );
};
export default Hero;
