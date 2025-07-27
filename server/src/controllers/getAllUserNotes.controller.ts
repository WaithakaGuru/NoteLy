import { Request, Response } from "express";
import client from "../utils/prismaClient.ts";
import handleErrors from "../utils/handleErrors.ts";

export default async function getAllUserNotes(req: Request, res: Response) {
  const { id } = res.locals.validUserData;
  try {
    const allUserNotes = await client.notes.findMany({
      where: {
        AND: [{ creator: id }, { isDeleted: false }],
      },
      include: { NoteCreator: { omit: { avatarUrl: true, password: true } } },
      orderBy: { lastUpdated: "desc" },
    });
    if (allUserNotes) res.status(200).json(allUserNotes);
  } catch (err) {
    handleErrors(err, "Failed to fetch Notes", req, res);
  }
}
