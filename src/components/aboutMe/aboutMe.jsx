import { aboutme } from "@/data/info";
import { useTranslations } from "next-intl";
import Image from "next/image";

function AboutMe() {
  const t = useTranslations("aboutme");
  return (
    <section
      id="aboutme"
      className="min-h-fit md:h-screen py-20 flex flex-col items-center justify-center gap-10"
    >
      <div className="max-w-6xl flex flex-col items-center text-center gap-4 px-8">
        <h3 className="text-6xl font-bold">{t("title")}</h3>
        <h4 className="text-lg md:text-2xl">{t("description")}</h4>
      </div>
      <div className="grid md:grid-cols-2 px-8 w-full h-full gap-12 md:gap-8">
        <div className="h-72 md:h-full w-full relative flex justify-center rounded-lg overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/5794059/pexels-photo-5794059.jpeg"
            alt="About me"
            layout="fill"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-col items-start justify-center h-full">
            {aboutme.map((info, index) => {
              return (
                <li key={index} className="text-lg flex gap-4 ">
                  <div className=" pb-12 relative h-full ">
                    <div className="p-2 bg-primary z-10 rounded-full relative">
                      <info.icon className="w-8 h-8 text-secondary" />
                    </div>
                    {index !== aboutme.length - 1 && (
                      <div className="absolute h-full w-[2px] top-0 left-1/2 -translate-x-1/2 bg-primary z-0"></div>
                    )}
                  </div>
                  <span>
                    <h4>
                      {t(info.translation + ".year")} -{" "}
                      {t(info.translation + ".title")}
                    </h4>
                    <p className="text-sm text-onbackground">
                      {t(info.translation + ".institution")}
                    </p>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
