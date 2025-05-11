export const config = {
  runtime: 'edge',
};

export default function handler(req) {
  return new Response('Hello from Edge Function!', {
    status: 200,
    headers: { 'content-type': 'text/plain' },
  });
}
