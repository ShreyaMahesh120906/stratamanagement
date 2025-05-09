// app/api/auth/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  if (email === 'resident@strata.com' && password === 'secure123') {
    return NextResponse.json({ status: 'success', message: 'Logged in' });
  }

  return NextResponse.json({ status: 'fail', message: 'Invalid credentials' }, { status: 401 });
}
