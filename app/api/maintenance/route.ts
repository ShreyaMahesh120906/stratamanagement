// app/api/maintenance/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge'; // Enables edge runtime

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { unit, issue } = body;

  return NextResponse.json({
    status: 'received',
    ticketId: Date.now(),
    unit,
    issue,
  });
}
