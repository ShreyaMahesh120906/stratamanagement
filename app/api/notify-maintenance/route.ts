import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export async function POST(req: NextRequest) {
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

export function GET() {
  return new NextResponse(
    JSON.stringify({ message: 'Only POST is allowed on this route' }),
    { status: 405 }
  );
}
