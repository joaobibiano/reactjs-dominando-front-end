import type { NextApiRequest, NextApiResponse } from "next";
import { searchByTerm } from "../../services/data";

// http://localhost:3000/api/cars?search=c3
// THIS IS SERVER SIDE
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const searchTerm = req.query.search as string;

  const cars = await searchByTerm(searchTerm);

  res.status(200).json(cars);
}
