import Hero from '@/components/hero/Hero';

import { CiMedicalClipboard } from 'react-icons/ci';
import { IoBarbellOutline } from 'react-icons/io5';
import { TbMassage } from 'react-icons/tb';

function Page({ params: { lng } }) {
    return (
        <div>
            <Hero />
             <div className="">
                <div className=" h-[150px] grid grid-cols-3 items-center px-14">
                    <CiMedicalClipboard className="w-[150px] h-full mx-auto" />
                    <div className='flex col-span-2 flex-col h-[100%] bg-onbackground rounded-lg gap-3 justify-center mr-12'>
                        <h3 className='font-bold text-2xl'>Valutazione e Diagnosi</h3>
                        <p className=''>
                            Ascolto la tua storia e creo una cartella
                            dettagliata. Penso poi un piano di trattamento
                            personalizzato che includa Valutazione e diagnosi,
                            volto/a/e/i a ottenere i risultati funzionali che ci
                            siamo posti insieme.
                        </p>
                    </div>
                </div>
                <div className="h-[300px]">
                    <IoBarbellOutline className="w-[150px] h-[150px]" />
                </div>
                <div className="h-[300px]">
                    <TbMassage className="w-[150px] h-[150px]" />
                </div>
            </div> 
        </div>
    );
}
export default Page;
