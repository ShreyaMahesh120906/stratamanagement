import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export function GET() {
  const mockRequests = [
    {
      issue: 'Clogged Drain',
      unit: '5A',
      status: 'Resolved',
      reported: '2025-03-15',
    },
    {
      issue: 'Broken Elevator',
      unit: 'All Floors',
      status: 'Pending',
      reported: '2025-04-10',
    },
  ];

  return new NextResponse(JSON.stringify(mockRequests), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

