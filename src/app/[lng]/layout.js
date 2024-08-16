import Navbar from '@/components/navbar/Navbar';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { dir } from 'i18next'
import "../globals.css";


const languages = ['en', 'it'];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: { lng }
}) {

  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <Navbar lng={lng}/>
        {lng}
        {children}
      </body>
    </html>
  );
}