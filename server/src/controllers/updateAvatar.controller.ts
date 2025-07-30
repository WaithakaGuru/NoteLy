import client from "../utils/prismaClient";
import handleErrors from "../utils/handleErrors";
import { Request, Response } from "express";

export default async function updateUserAvatar(req: Request, res: Response) {
  const {avatarUrl} = req.body;
  const { id } = res.locals.validUserData;
  try {
    const updatedUser = await client.users.update({
      where: { id },
      data: {avatarUrl},
    });
    if (updatedUser) res.status(201).json(updatedUser);
  } catch (err) {
    handleErrors(err, "Update Avatar later", req, res);
  }
}
