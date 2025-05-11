export const config = {
  runtime: 'edge',
};

export async function GET() {
  const message = `Reminder: Your maintenance fees are overdue. Please make the payment by May 30, 2025.`;

  return new Response(message, {
    headers: { "Content-Type": "text/plain" },
  });
}
