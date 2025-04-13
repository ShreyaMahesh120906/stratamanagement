import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default function handler(req: NextRequest) {
  const region = req.geo?.region || 'Unknown Region';

  const message = `Your next strata meeting for region: ${region} is scheduled for April 18, 2025`;

  return new NextResponse(
    JSON.stringify({ message }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
