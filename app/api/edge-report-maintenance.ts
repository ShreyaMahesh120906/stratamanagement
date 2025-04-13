import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  if (req.method !== 'POST') {
    return new NextResponse('Only POST allowed', { status: 405 });
  }

  const body = await req.json();

  return new NextResponse(
    JSON.stringify({
      message: 'Edge: Maintenance request received successfully!',
      request: body,
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
