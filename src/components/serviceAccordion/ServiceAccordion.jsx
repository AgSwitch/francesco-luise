import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceCard } from "../serviceCard/ServiceCard";
import { useTranslations } from "next-intl";

export function ServiceAccordion({index}) {
    const t = useTranslations("service_page.services");

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className={'p-8 text-lg font-semibold'}>{t(`${index}.service_title`)}</AccordionTrigger>
        <AccordionContent className={'pb-0'}>
          <ServiceCard index={index} className={'px-8'}/>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

