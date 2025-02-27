import { accessTokenName } from '@/core/constants';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
};

const authentication = (req: NextRequest) => {
  const { pathname } = req.nextUrl;

  const isAuthenticated = req.cookies.has(accessTokenName);
  const isLoginPage = pathname.startsWith('/login');

  if (pathname.startsWith('/_next')) return NextResponse.next();

  if (!isAuthenticated && !isLoginPage) {
    req.cookies.clear();
    req.nextUrl.pathname = '/login';
    return NextResponse.redirect(req.nextUrl);
  }

  if (isAuthenticated && isLoginPage) {
    req.nextUrl.pathname = '/';
    return NextResponse.redirect(req.nextUrl);
  }
};

export function middleware(req: NextRequest) {
  return authentication(req);
}