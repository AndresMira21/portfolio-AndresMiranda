import createMiddleware from 'next-intl/middleware';
import nextintlConfig from './next-intl.config';


export default createMiddleware(nextintlConfig);

export const config = {
  matcher: ['/', '/(es|en)/:path*'],
};