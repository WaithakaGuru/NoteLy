import { Response, Request, NextFunction } from "express";
import client from "../utils/prismaClient";
import handleErrors from "../utils/handleErrors";

export default async function verifyUniqueUsername(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { userName } = req.body;
  const { id } = res.locals.validUserData;

  try {
    const uniqueUsername = await client.users.findFirst({
      where: { userName, NOT: { id } },
    });
    if (uniqueUsername) {
      res.status(400).json({ message: "Username is taken:" });
      return;
    } else {
      res.locals.uniqueUsername = userName;
      next();
    }
  } catch (err) {
    handleErrors(err, "Update user infor 'userName' later", req, res);
  }
}
