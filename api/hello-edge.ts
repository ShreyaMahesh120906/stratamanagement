export const config = {
  runtime: 'edge',
  regions: ['syd1'], // optional if you want to force regionality
};

export default async function handler(request: Request) {
  return new Response("Hello from Edge!", {
    status: 200,
    headers: { "content-type": "text/plain" },
  });
}
