import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

const LOGIN_API_ENDPOINT = "https://pw.intelladapt.com/AMOL/api/login.php";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      const apiResponse = await fetch(LOGIN_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await apiResponse.json();

      if (apiResponse.ok && data.token) {
        res.setHeader('Set-Cookie', serialize('token', data.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production', // ensure cookies are sent over HTTPS
          sameSite: 'strict',
          path: '/',
          maxAge: 3600 // 1 hour for example
        }));
        res.status(200).json({ success: true });
      } else {
        res.status(400).json({ error: 'Authentication failed', details: data });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
