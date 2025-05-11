// app/api/maintenance/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { unit, issue } = body;

  // You could send this to a database or email
  return NextResponse.json({ status: 'received', ticketId: Date.now(), unit, issue });
}
