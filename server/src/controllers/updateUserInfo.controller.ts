import client from "../utils/prismaClient.ts";
import handleErrors from "../utils/handleErrors.ts";
import { Request, Response } from "express";

export default async function updateUserInfo(req: Request, res: Response) {
  const { avatarUrl, firstName, lastName, email, userName } = req.body;
  const { id } = res.locals.validUserData;
  try {
    const updatedUser = await client.users.update({
      where: { id },
      data: { avatarUrl, firstName, lastName, emailAddress: email, userName },
    });
    if (updatedUser) res.status(201).json(updatedUser);
  } catch (err) {
    handleErrors(err, "Update User Information later", req, res);
  }
}
