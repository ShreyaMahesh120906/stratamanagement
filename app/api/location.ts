// app/api/location.ts
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge', // Edge function!
};

export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'unknown';
  const response = NextResponse.next();
  response.headers.set('X-Country', country);
  return response;
}
