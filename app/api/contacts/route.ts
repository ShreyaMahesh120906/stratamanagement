import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name || !body.email || !body.message) {
    return new NextResponse('Missing required fields', { status: 400 });
  }

  console.log('[Edge] Received contact form:', body);

  return new NextResponse('Contact form submitted successfully', { status: 200 });
}
