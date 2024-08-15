import Navbar from '@/components/navbar/Navbar';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import "../globals.css";
 
export default async function LocaleLayout({
  children,
  params: {locale}
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
        <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}