import Services from "./Services";
import { getMessages } from "next-intl/server";

export async function generateMetadata({ params: { lng } }) {
  const messages = await getMessages(lng);
  const siteTitle = messages.hero.title;

  const pageTitle = messages.services.title;
  const fullTitle = `${pageTitle} | ${siteTitle}`;

  return {
    title: fullTitle,
  };
}

const ServicesPage = () => {
  return <Services />;
};

export default ServicesPage;
