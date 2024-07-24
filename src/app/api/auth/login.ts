import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post('http://localhost:3001/auth/login', req.body);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Login failed', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
