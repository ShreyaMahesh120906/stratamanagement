// pages/api/strata/lot.js
export default function handler(req, res) {
  const { lotNumber } = req.query;

  if (!lotNumber) {
    return res.status(400).json({ error: 'Missing lot number' });
  }

  const strataData = {
    '101': { lotNumber: '101', owner: 'John Doe', fees: '$500/quarter' },
    '102': { lotNumber: '102', owner: 'Jane Smith', fees: '$450/quarter' },
  };

  const data = strataData[lotNumber];

  if (!data) {
    return res.status(404).json({ error: 'Lot not found' });
  }

  return res.status(200).json(data);
}
