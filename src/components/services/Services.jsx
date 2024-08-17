import { useTranslations } from "next-intl";
import { CiMedicalClipboard } from "react-icons/ci";
import { IoBarbellOutline } from "react-icons/io5";
import { TbMassage } from "react-icons/tb";

const { Button } = require("@/components/ui/button");
const { ServicePill } = require("./ServicePill");
const { default: Link } = require("next/link");

function Services({lng}) {
    const t = useTranslations("services");
  
    return (
      <div
        id="services"
        className=" min-h-screen bg-secondary py-20 flex flex-col items-center justify-center gap-10"
      >
        <h3 className="text-6xl font-bold">{t("title")}</h3>
        <div className="grid lg:grid-cols-3 px-8 lg:px-20 gap-8">
          <ServicePill
            title={t("pills.assistance.title")}
            Icon={CiMedicalClipboard}
            description={t("pills.assistance.description")}
          />
          <ServicePill
            title={t("pills.therapy.title")}
            Icon={IoBarbellOutline}
            description={t("pills.therapy.description")}
          />
          <ServicePill
            title={t("pills.health.title")}
            Icon={TbMassage}
            description={t("pills.health.description")}
          />
        </div>
        <Button className="p-8 text-xl rounded-3xl">
          <Link href={`${lng}/services`}>{t("button")}</Link>
        </Button>
      </div>
    );
  }
  
  export default Services;