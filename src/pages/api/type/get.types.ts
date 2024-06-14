import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/drizzle/db";
import { Type } from "@/drizzle/schema";
import { handleError } from "@/utils/handleError";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const types = await db.select().from(Type).execute();

    return res.status(200).json(types);
  } catch (err) {
    handleError(err, res);
  }
};

export default handler;
