// app/api/contacts/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Set runtime to edge
export const config = {
  runtime: 'edge',
};

export async function GET(request: NextRequest) {
  // Example: Return static contact data
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

  // Basic validation (expand as needed)
  if (!body.name || !body.email || !body.message) {
    return new NextResponse('Missing required fields', { status: 400 });
  }

  // Example: Log to console or forward to a service like Formspree, Email API, etc.
  console.log('Received contact form:', body);

  return new NextResponse('Contact form submitted successfully', { status: 200 });
}
