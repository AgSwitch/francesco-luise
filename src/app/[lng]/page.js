import Hero from "@/app/[lng]/_components/Hero";
import { useTranslations } from "next-intl";
import Services from "./_components/Services";

function Page({ params: { lng } }) {
  const t = useTranslations("services");

  return (
    <div>
      <Hero />
      <Services lng={lng}/>
    </div>
  );
}
export default Page;