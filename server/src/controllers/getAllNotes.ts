import { Request, Response } from "express";
import client from "../utils/prismaClient";
import handleErrors from "../utils/handleErrors";

export default async function getAllNotes(req: Request, res: Response) {
  const { id } = res.locals.validUserData;
  try {
    const allUserNotes = await client.notes.findMany({
      where: {
        AND: [
          { isDeleted: false },
          { OR: [{ creator: id }, { isPublic: true }] },
        ],
      },
      include: { NoteCreator: { omit: { password: true, avatarUrl: true } } },
      orderBy: { lastUpdated: "desc" },
    });
    if (allUserNotes) {
      res.status(200).json(allUserNotes);
    }
  } catch (err) {
    handleErrors(err, "Failed to fetch Notes", req, res);
  }
}
