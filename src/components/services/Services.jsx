import { useTranslations } from "next-intl";
import { CiMedicalClipboard } from "react-icons/ci";
import { IoBarbellOutline } from "react-icons/io5";
import { TbMassage } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import Pill from "../pill/Pill";
import Link from "next/link";

function Services({lng}) {
    const t = useTranslations("services");
  
    return (
      <section
        id="services"
        className=" min-h-screen bg-secondary py-20 flex flex-col items-center justify-center gap-10"
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
        <Button className="p-8 text-xl rounded-3xl">
          <Link href={`${lng}/services`}>{t("button")}</Link>
        </Button>
      </section>
    );
  }
  
  export default Services;