import createMiddleware from 'next-intl/middleware';
import nextIntlConfig from './next-intl.config';

export default createMiddleware(nextIntlConfig);

export const config = {
  matcher: [
    '/',
    '/(es|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'  // ← agrega esta línea
  ]
};