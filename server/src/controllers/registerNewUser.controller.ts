import handleErrors from "../utils/handleErrors";
import hashPassword from "../utils/hashPassword";
import client from "../utils/prismaClient";
import { Request, Response } from "express";

export default async function registerNewUser(req: Request, res: Response) {
  const { avatarUrl, firstName, lastName, userName, emailAddress, password } =
    req.body;
  const hashedPassword = hashPassword(password);
  try {
    const newUser = await client.users.create({
      data: {
        firstName,
        lastName,
        userName,
        emailAddress,
        password: hashedPassword,
        avatarUrl,
      },
    });
    if (newUser) res.status(201).json(newUser);
    else res.status(400).json({ message: "Failed to register user!" });
  } catch (err) {
    handleErrors(err, "Register later", req, res);
  }
}
