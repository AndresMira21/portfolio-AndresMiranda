import {getRequestConfig} from 'next-intl/server';

type Messages = Record<string, any>;

export default getRequestConfig(async ({locale}) => {
  const currentLocale = locale || 'es';
  return {
    locale: currentLocale,
    messages: (await import(`../messages/${currentLocale}.json`)).default as Messages
  };
});