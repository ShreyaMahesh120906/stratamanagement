// app/api/contacts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('API is working!');
}
