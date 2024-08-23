"use client";
import Services from "../../components/services/Services";
import Hero from "@/components/hero/Hero";
import Contacts from "@/components/contacts/Contacts";
import AboutMe from "@/components/aboutMe/aboutMe";
import Blog from "@/components/blog/Blog";
function Page({ params: { lng } }) {
  return (
    <main>
      <Hero />
      <Services lng={lng} />
      <AboutMe />
      <Blog />
      <Contacts />
    </main>
  );
}
export default Page;
