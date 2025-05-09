// api/notify-maintenance.ts
import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const time = new Date().toISOString();
  console.log(`[CRON LOG] Maintenance check triggered at ${time}`);

  res.status(200).json({
    message: 'Maintenance triggered successfully!',
    time,
  });
}
