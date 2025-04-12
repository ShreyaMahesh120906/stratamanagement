// pages/api/maintenance.ts (Next.js API Route)
import { NextApiRequest, NextApiResponse } from 'next';

let maintenanceRequests: Array<any> = []; // This is a temporary in-memory array to simulate a database

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Save the new maintenance request
    const newRequest = req.body;
    maintenanceRequests.push(newRequest); // Add to the array (simulate database storage)

    // Respond with a success message
    return res.status(201).json({ message: 'Request submitted successfully' });
  }

  if (req.method === 'GET') {
    // Return the list of maintenance requests
    return res.status(200).json(maintenanceRequests);
  }

  return res.status(405).json({ message: 'Method not allowed' });
};
