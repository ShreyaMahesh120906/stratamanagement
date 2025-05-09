import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    res.status(200).json({
      message: 'Maintenance triggered successfully!',
      time: new Date().toISOString(),
    });
  } else {
    res.status(405).json({ message: 'Only POST is allowed' });
  }
}
