import prisma from "@/utils/Prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const guestbook = await prisma.guestbook.findMany()
    return res.status(200).json({
        "message": "Berhasil mendapatkan data",
        "method": req.method,
        "data": guestbook
    })
};
