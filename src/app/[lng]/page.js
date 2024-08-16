import Hero from "@/components/hero/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { CiMedicalClipboard } from "react-icons/ci";
import { IoBarbellOutline } from "react-icons/io5";
import { TbMassage } from "react-icons/tb";

function Page({ params: { lng } }) {
  return (
    <div>
      <Hero />
      <div id="services" className=" min-h-screen bg-gray-100 py-20 flex flex-col items-center justify-center gap-10">

      <h3 className="text-6xl font-bold">Services</h3>
      <div className="grid lg:grid-cols-3 px-8 lg:px-20 gap-8">
          <ServicePill title="Valutazione e Diagnosi" Icon={CiMedicalClipboard}>Ascolto la tua storia e creo una cartella dettagliata. Penso poi un piano di trattamento personalizzato che includa Valutazione e diagnosi, volto/a/e/i a ottenere i risultati funzionali che ci siamo posti insieme.</ServicePill>
          <ServicePill title="Trattamento e Terapia" Icon={IoBarbellOutline}>Cerco di capire la radice del tuo problema, per poterti fornire il trattamento più efficiente. Negli anni, ho scoperto che Trattamento e terapia sono elementi fondamentali nel processo di recupero.</ServicePill>
          <ServicePill title="Assistenza continua" Icon={TbMassage}>Assistenza continua è parte integrante del mio approccio volto al trattamento di tutto il corpo, e non solo del problema isolato.</ServicePill>
      </div>
      <Button className="p-8 text-xl rounded-3xl">
        <Link href={`${lng}/services`}>Scopri di più</Link>
      </Button>
      </div>
    </div>
  );
}
export default Page;

function ServicePill({children, title, Icon}) {
  return (
    <div className='border-none h-fit bg-background rounded-3xl p-8 flex flex-col gap-2 h-full' >
      <Icon className="w-10 h-10" />
        <h3 className="font-bold text-4xl">{title}</h3>
        <p className="text-lg">{children}</p>
    </div>
  );
}
