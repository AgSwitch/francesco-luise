import { useTranslations } from "next-intl";
import Image from "next/image";

const Logo = ({className='mb-[150px]', titleClass="text-4xl md:text-6xl", descriptionClass="text-2xl md:text-4xl", logoSize=400}) => {
    const t = useTranslations("hero");
    return (
        <div className={`relative flex flex-col items-center gap-2 md:gap-5 z-40 md:mb-0 ${className}`}>
            <Image
                src={'/logo.png'}
                width={logoSize}
                height={logoSize}
                alt="logo"
                className="absolute top-1/2 -translate-y-1/2 opacity-20"
            />
            <h2 className={`${titleClass} font-[300]`}>{t('title')}</h2>
            <h1 className={`${descriptionClass} font-[300]`}>
                {t('description')}
            </h1>
        </div>
    );
};
export default Logo;
