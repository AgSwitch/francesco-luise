import { contacts } from '@/data/info';
import Link from 'next/link';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import Logo from '../logo/Logo';
import { useTranslations } from 'next-intl';

const Footer = () => {
    const t = useTranslations('footer');
    return (
        <footer className='flex flex-col items-center bg-secondary p-20 pb-4 gap-14'>
            <div className="w-full flex-col  gap-12 md:flex-row flex justify-between items-center">
                <div className='flex-1 mb-6'>
                    <Logo
                        className={`w-fit gap-1 md:gap-1 mb-0`}
                        titleClass="text-lg lg:text-2xl"
                        descriptionClass="text-base lg:text-xl"
                        logoSize={200}
                    />
                </div>
                <div className='flex-1 flex justify-center'>
                    <ul className="flex flex-col items-start">
                        <li>{t('vat')}: {contacts.vat}</li>
                        <li>{t('register')}: {contacts.register}</li>
                    </ul>
                </div>
                <div className='flex-1 flex justify-center gap-5'>
                    <Link  href={contacts.whatsapp} target='_blank'>
                        <IoLogoWhatsapp  className='w-12 h-12'/>
                    </Link>
                    <Link href={'#'} target='_blank'>
                        <AiFillInstagram className='w-12 h-12'/>
                    </Link>
                    <Link href={contacts.linkedin} target='_blank'>
                        <FaLinkedin className='w-12 h-12'/>
                    </Link>
                </div>
            </div>
            <div className="">
                <p className='text-nowrap'>All rights reserved. Francesco Luise</p>
            </div>
        </footer>
    );
};
export default Footer;
