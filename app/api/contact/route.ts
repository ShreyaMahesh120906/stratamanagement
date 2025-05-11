// app/api/contacts/route.ts
import { NextRequest, NextResponse } from 'next/server';

// ✅ This enables Edge Runtime
export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const contacts = [
    {
      name: 'John Doe',
      role: 'Strata Manager',
      phone: '123-456-7890',
      email: 'john.doe@stratacorp.com',
    },
    {
      name: 'Emergency Line',
      role: '24/7 Support',
      phone: '987-654-3210',
      email: 'support@stratacorp.com',
    },
  ];

  return NextResponse.json(contacts);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // ✅ Basic validation
  if (!body.name || !body.email || !body.message) {
    return new NextResponse('Missing required fields', { status: 400 });
  }

  // ✅ Log the form submission (visible in Vercel logs)
  console.log('[Edge] Received contact form:', body);

  return new NextResponse('Contact form submitted successfully', { status: 200 });
}
