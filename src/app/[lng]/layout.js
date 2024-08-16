import Navbar from '@/components/navbar/Navbar';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { dir } from 'i18next'
import "../globals.css";
import { Lato } from 'next/font/google';
const languages = ['en', 'it'];

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin']});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: { lng }
}) {

  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={lato.className}>
        <Navbar lng={lng}/>
        {children}
      </body>
    </html>
  );
}