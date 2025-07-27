import { Request, Response } from "express";
import client from "../utils/prismaClient";
import handleErrors from "../utils/handleErrors";

export default async function getUserInfo(req: Request, res: Response) {
  const { id } = res.locals.validUserData;
  try {
    const userInfo = await client.users.findFirst({
      where: {
        id,
      },
      omit: { password: true },
    });
    if (userInfo) res.status(200).json(userInfo);
  } catch (err) {
    handleErrors(err, "Failed to fetch user Info", req, res);
  }
}
