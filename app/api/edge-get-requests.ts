import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  const mockRequests = [
    {
      issue: 'Leaking Pipe',
      unit: '12B',
      status: 'In Progress',
      reported: '2025-03-28',
    },
    {
      issue: 'Light Out in Hallway',
      unit: 'Level 3',
      status: 'Pending',
      reported: '2025-04-01',
    },
  ];

  return new NextResponse(JSON.stringify(mockRequests), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
