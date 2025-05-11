export const config = {
  runtime: 'edge',
};

export async function GET() {
  const notices = [
    { title: "Fire Drill", date: "2025-05-20" },
    { title: "Water Maintenance", date: "2025-05-25" },
  ];

  return new Response(JSON.stringify(notices), {
    headers: { "Content-Type": "application/json" },
  });
}
