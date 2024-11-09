import { redirect } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'it', 'es'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) redirect('/it');

  const commonMessages = (await import(`../messages/${locale}/common.json`)).default;
  let servicesMessages = {};
  
  try {
    servicesMessages = (await import(`../messages/${locale}/services.json`)).default;
  } catch (error) {
    console.warn(`No services messages found for locale ${locale}`);
  }

  return {
    messages: {
      ...commonMessages,
      ...servicesMessages
    }
  };
});
