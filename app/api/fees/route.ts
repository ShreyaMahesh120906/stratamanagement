export const config = {
  runtime: 'edge',
};

export async function GET() {
  const data = {
    unit: "3B",
    feeStatus: "Unpaid",
    dueDate: "2025-05-30",
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
