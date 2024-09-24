"use client"
import { useTranslations } from "next-intl";
import { ServiceCard } from "../../../components/serviceCard/ServiceCard";
export async function generateMetadata({ params }) {
  const postTitle = await getPostTitle(params.slug);

  const messages = await getMessages(params.lng);
  const siteTitle = messages.hero.title;

  return {
    title: postTitle ? `${postTitle} | ${siteTitle}` : siteTitle,
  };
}
const Services = () => {
  const t = useTranslations("service_page");

  const services = t.raw("services");

  return (
    <main>
      <div className="flex justify-center flex-col items-center pt-32 text-center px-8">
        <h1 className="text-3xl md:text-6xl font-bold">{t("title")}</h1>
        <h2 className="text-xl md:text-3xl font-semibold">{t("main_subtitle")}</h2>
      </div>
      <div>
        {services.map((_, index) => (
          <ServiceCard key={index} index={index} />
        ))}
      </div>
    </main>
  );
};

export default Services;


