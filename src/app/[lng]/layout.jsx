import Navbar from '@/components/navbar/Navbar';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { dir } from 'i18next';
import '../globals.css';
import { Lato } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import CalendlyPopup from '@/components/calendly/CalendlyPopup';
import { Toaster } from 'sonner';
import { locales } from '@/i18n';

const lato = Lato({
    weight: ['100', '300', '400', '700', '900'],
    subsets: ['latin'],
});

export async function generateMetadata({ params: { lng } }) {
    const messages = await getMessages(lng);

    return {
        title: messages.hero.title,
        description: messages.hero.description,
        openGraph: {
            title: messages.hero.title,
            description: messages.hero.description,
            url: `https://francescoluise.com/${lng}`, // TO DO: Update with actual website URL
            type: 'website',
        },
        twitter: {
            card: '/fluise.png',
            title: messages.hero.title,
            description: messages.hero.description,
        },
    };
}

export async function generateStaticParams() {
    return locales.map((lng) => ({ lng }));
}

export default async function RootLayout({ children, params: { lng } }) {
    unstable_setRequestLocale(lng);

    const messages = await getMessages(lng);

    return (
        <html lang={lng} dir={dir(lng)}>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link
                    rel="icon"
                    href="/icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
                <link
                    rel="apple-touch-icon"
                    href="/apple-icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
            </head>

            <body className={`${lato.className} text-primary`}>
                <NextIntlClientProvider messages={messages}>
                    <Toaster richColors />
                    <Navbar lng={lng} />
                    {children}
                    <Footer />
                    <CalendlyPopup lng={lng} />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
