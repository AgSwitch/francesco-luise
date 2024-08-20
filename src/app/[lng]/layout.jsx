import Navbar from '@/components/navbar/Navbar';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { dir } from 'i18next';
import '../globals.css';
import { Lato } from 'next/font/google';
import { availableLanguages } from '../../../global/languages';
import Footer from '@/components/footer/Footer';
import CalendlyPopup from '@/components/calendly/CalendlyPopup';

const lato = Lato({
    weight: ['100', '300', '400', '700', '900'],
    subsets: ['latin'],
});

export async function generateStaticParams() {
    return availableLanguages.map((lng) => ({ lng }));
}

export default async function RootLayout({ children, params: { lng } }) {
    unstable_setRequestLocale(lng);

    const messages = await getMessages(lng);

    return (
        <html lang={lng} dir={dir(lng)}>
            <body className={`${lato.className} text-primary`}>
                <NextIntlClientProvider messages={messages}>
                    <Navbar lng={lng} />
                    {children}
                    <Footer />
                    <CalendlyPopup lng={lng} />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
