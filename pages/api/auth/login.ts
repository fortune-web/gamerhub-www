import type { NextApiRequest, NextApiResponse } from 'next';
import { magicAdmin } from '../../../backend/lib/magic';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(
    magicAdmin.token.decode(`${req.headers.authorization?.substring(7)}`)
  );
  res.status(200).json({ name: 'John Doe' });
}
