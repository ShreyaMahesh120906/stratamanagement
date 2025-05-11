// For App Router (app/api/strata/lot/route.js)

export const config = {
  runtime: 'edge',
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const lotNumber = searchParams.get('lotNumber');

  if (!lotNumber) {
    return new Response(JSON.stringify({ error: 'Missing lot number' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Simulated strata data (replace with your DB or API call)
  const strataData = {
    '101': { lotNumber: '101', owner: 'John Doe', fees: '$500/quarter' },
    '102': { lotNumber: '102', owner: 'Jane Smith', fees: '$450/quarter' },
  };

  const data = strataData[lotNumber];

  if (!data) {
    return new Response(JSON.stringify({ error: 'Lot not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
