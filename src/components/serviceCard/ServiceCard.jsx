import { useTranslations } from "next-intl";
import Image from "next/image";

export function ServiceCard({ index, className }) {
    const t = useTranslations("service_page.services");
    return (
        <div
            key={index}
            className={`py-20 grid xl:grid-cols-2 min-h-full gap-8 px-8 ${index % 2 === 0 ? "bg-background" : "bg-secondary"} ${className}`}
        >
            <div className="flex flex-col gap-6 md:p-20">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold">{t(`${index}.service_title`)}</h3>
                    <h4 className="text-lg md:text-xl font-semibold">{t(`${index}.service_subtitle`)}</h4>
                </div>
                <p>{t(`${index}.description`)}</p>
                <ul className="list-disc pl-6">
                    {t.raw(`${index}.points`).map((point, idx) => (
                        <li key={idx}>{point}</li>
                    ))}
                </ul>
            </div>
            <div className={`flex items-center justify-center -order-1 ${index % 2 !== 0 && "xl:order-1"} `}>
                <div className="aspect-video w-full relative p-20 rounded-2xl overflow-hidden">
                    <Image
                        src={t(`${index}.image`)}
                        alt=""
                        fill
                        className="aspect-square" />
                </div>
            </div>
        </div>
    );
}
