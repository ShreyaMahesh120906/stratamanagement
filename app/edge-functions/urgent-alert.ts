// /app/edge-functions/urgent-alert.ts
export const config = {
  runtime: 'edge',
};

export default async function handler() {
  const alert = "🚨 Water outage on Level 2 from 9AM - 3PM";
  return new Response(alert, {
    headers: { "Content-Type": "text/plain" },
  });
}
