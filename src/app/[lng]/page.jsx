"use client";
import Services from "../../components/services/Services";
import Hero from "@/components/hero/Hero";
import Contacts from "@/components/contacts/Contacts";
import AboutMe from "@/components/aboutMe/aboutMe";
import Carousel from "@/components/carousel/Carousel";

function Page({ params: { lng } }) {


  return (
    <main>
      <Hero />
      <Services lng={lng} />
      <Carousel />
      <AboutMe />
      <Contacts />
    </main>
  );
}
export default Page;
