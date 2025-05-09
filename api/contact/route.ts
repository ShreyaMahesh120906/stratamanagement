import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');
  const email = searchParams.get('email');

  if (!name || !email) {
    return NextResponse.json(
      { error: 'Missing name or email in query string' },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { message: `Received GET request from ${name} with email ${email}` },
    { status: 200 }
  );
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'All fields (name, email, message) are required' },
      { status: 400 }
    );
  }

  console.log('Form submitted:', { name, email, message });

  // Redirect to a thank you page after POST
  return NextResponse.redirect(new URL('/thank-you', req.url), 302);
}
