// app/api/fees/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

// GET: Return current strata fees
export async function GET() {
  const feeData = {
    quarterlyFee: 1500,
    dueDate: '2025-06-01',
    paymentMethods: ['Direct Debit', 'Credit Card'],
  };

  return NextResponse.json(feeData);
}

// POST: Accept a fee-related query
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, unit, question } = body;

  if (!name || !unit || !question) {
    return new NextResponse('Missing required fields', { status: 400 });
  }

  console.log('[Edge] Fee query submitted:', body);

  return NextResponse.json({
    status: 'query received',
    timestamp: Date.now(),
  });
}
