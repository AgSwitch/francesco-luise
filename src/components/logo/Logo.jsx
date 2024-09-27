import { useTranslations } from "next-intl";
import Image from "next/image";

const Logo = ({className='mb-[180px]', titleClass="text-4xl md:text-6xl", descriptionClass="text-2xl md:text-4xl", logoSize=400, noImage}) => {
    const t = useTranslations("hero");
    return (
        <>
        {
            !noImage && 
            <div className={`relative flex flex-col items-center gap-2 md:gap-5 z-40 md:mb-0 ${className} overflow=x-hidden`}>
                <Image
                    src={'/logo.png'}
                    width={logoSize}
                    height={logoSize}
                    alt="logo"
                    className="absolute top-1/2 -translate-y-1/2 -z-10 rounded-full opacity-40"
                    />
                <h2 className={`${titleClass} font-base md:font-[300]`}>{t('title')}</h2>
                <h1 className={`${descriptionClass} font-base md:font-[300]`}>
                    {t('description')}
                </h1>
            </div>
        }
        {
            noImage && 
            <div  className={`absolute bottom-20 z-40 text-white rounded-md p-2 ${className}`}>
                <h2 className={`${titleClass} font-base md:font-[300]`}>{t('title')}</h2>
                <h1 className={`${descriptionClass} font-base md:font-[300]`}>
                    {t('description')}
                </h1>
            </div>
        }
        </>
    );
};
export default Logo;
