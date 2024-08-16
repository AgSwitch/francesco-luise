import Hero from "@/components/hero/Hero";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { CiMedicalClipboard } from "react-icons/ci";
import { IoBarbellOutline } from "react-icons/io5";
import { TbMassage } from "react-icons/tb";

function Page({ params: { lng } }) {
  const t = useTranslations("services");

  return (
    <div>
      <Hero />
      <div id="services" className=" min-h-screen bg-gray-100 py-20 flex flex-col items-center justify-center gap-10">

      <h3 className="text-6xl font-bold">{t('title')}</h3>
      <div className="grid lg:grid-cols-3 px-8 lg:px-20 gap-8">
          <ServicePill title={t('pills.assistance.title')} Icon={CiMedicalClipboard} description={t('pills.assistance.description')} />
          <ServicePill title={t('pills.therapy.title')}  Icon={IoBarbellOutline} description={t('pills.therapy.description')} />
          <ServicePill title={t('pills.health.title')}  Icon={TbMassage} description={t('pills.health.description')} />
      </div>
      <Button className="p-8 text-xl rounded-3xl">
        <Link href={`${lng}/services`}>{t('button')}</Link>
      </Button>
      </div>
    </div>
  );
}
export default Page;

function ServicePill({description, title, Icon}) {
  return (
    <div className='border-none bg-background rounded-3xl p-8 flex flex-col gap-2 h-full' >
      <Icon className="w-10 h-10" />
        <h3 className="font-bold text-4xl">{title}</h3>
        <p className="text-lg">{description}</p>
    </div>
  );
}
