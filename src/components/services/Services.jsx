import { useTranslations } from "next-intl";
import { CiMedicalClipboard } from "react-icons/ci";
import { IoBarbellOutline } from "react-icons/io5";
import { TbMassage } from "react-icons/tb";
import Pill from "../pill/Pill";
import CustomLink from "../customLink/CustomLink";

function Services({lng}) {
    const t = useTranslations("services");
  
    return (
      <section
        id="services"
        className="relative z-10 min-h-screen bg-secondary py-20 flex flex-col items-center justify-center gap-10"
      >
        <h3 className="text-6xl font-bold">{t("title")}</h3>
        <div className="grid lg:grid-cols-3 px-8 lg:px-20 gap-8">
          <Pill
            title={t("pills.assistance.title")}
            Icon={CiMedicalClipboard}
            description={t("pills.assistance.description")}
          />
          <Pill
            title={t("pills.therapy.title")}
            Icon={IoBarbellOutline}
            description={t("pills.therapy.description")}
          />
          <Pill
            title={t("pills.health.title")}
            Icon={TbMassage}
            description={t("pills.health.description")}
          />
        </div>
          <CustomLink href={`${lng}/services`} className="text-base">{t("button")}</CustomLink>
      </section>
    );
  }
  
  export default Services;