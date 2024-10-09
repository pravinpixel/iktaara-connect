import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Export the default middleware from next-auth
export { default } from 'next-auth/middleware';

export function middleware(request: NextRequest) {
  // Split the URL path into parts
  const urlPathName = request.nextUrl.pathname;

  const pathParts = urlPathName.split('/');

  const fisrtIndex = pathParts[1];

  const removedData = [
    '_next',
    'icons',
    'images',
    'assets',
    'api',
    'connect',
    '/'
  ];

  console.log(fisrtIndex, "fisrtIndex")

  if (!removedData.includes(fisrtIndex)) {
    const removedDataSplit = request.url.split('/');
    removedDataSplit.splice(3, 0, 'connect');
    const newUrlString = removedDataSplit.join('/');
    return NextResponse.redirect(new URL(newUrlString, request.url));
  }
}

export const config = {
  matcher: '/:path*',
};
