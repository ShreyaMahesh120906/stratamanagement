export const config = {
  runtime: 'edge',
};

export async function GET() {
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
