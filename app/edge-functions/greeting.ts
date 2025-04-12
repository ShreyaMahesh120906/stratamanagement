// /app/edge-functions/greeting.ts (Vercel Edge Function)
export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  const url = new URL(req.url);
  const city = req.headers.get('x-vercel-ip-city') || 'Resident';

  return new Response(
    JSON.stringify({ message: `Hello, ${city} resident!` }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}
