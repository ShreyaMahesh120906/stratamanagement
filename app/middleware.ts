// app/middleware.ts (or /edge-functions/geo-redirect.ts if using Vercel Edge Functions)
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: '/contact',  // Match specific routes like /contact
  runtime: 'edge',      // This indicates it is an edge function
};

export default function middleware(request: NextRequest) {
  const country = request.geo?.country || 'unknown';

  // Redirect non-AU users to a different page
  if (country !== 'AU') {
    return NextResponse.redirect(new URL('/info-for-non-residents', request.url));
  }

  return NextResponse.next();
}
