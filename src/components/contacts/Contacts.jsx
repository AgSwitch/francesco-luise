import { useTranslations } from "next-intl";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CustomForm } from "@/components/form/form";
import { contacts } from "@/data/info";
import { Separator } from "@radix-ui/react-separator";
import { IoLogoWhatsapp, IoMdPin } from "react-icons/io";
import Pill from "@/components/pill/Pill";

function Contacts(){
    const t = useTranslations("contacts");
    return (
      <section
          id="contact"
          className=" min-h-screen py-20 flex flex-col items-center justify-center gap-10"
        >
          <h3 className="text-6xl font-bold">{t('title')}</h3>
          <div className="grid md:grid-cols-2 mx-auto gap-8 px-8">
            <Pill
              title={"Call Me"}
              description={contacts.phone}
              Icon={FaPhone}
              className={"bg-secondary w-full"}
              link={{ target: "_blank", action: "tel:", href: contacts.phone }}
            />
            <Pill
              title={"Email Me"}
              description={contacts.email}
              Icon={MdEmail}
              className={"bg-secondary w-full"}
              link={{ target: "_blank", action: "mailto:", href: contacts.email }}
            />
            <Pill
              title={"Whatsapp Me"}
              description={contacts.phone}
              Icon={IoLogoWhatsapp}
              className={"bg-secondary w-full"}
              link={{
                target: "_blank",
                action: "",
                href: contacts.whatsapp + t("whatsapp"),
              }}
            />
            <Pill
              title={"Find Me"}
              description={contacts.address}
              Icon={IoMdPin}
              className={"bg-secondary w-full"}
              link={{
                target: "_blank",
                action: contacts.location,
                href: contacts.location,
              }}
            />
          </div>
  
          <div className="flex items-center gap-6">
            <Separator
              orientation="horizontal"
              className="bg-primary h-[2px] w-10"
            />
            <h4>{t('or').toUpperCase()}</h4>
            <Separator
              orientation="horizontal"
              className="bg-primary h-[2px] w-10"
            />
          </div>
  
          <CustomForm className={"w-full max-w-2xl"} />
        </section>
    )
  }
  
  export default Contacts;