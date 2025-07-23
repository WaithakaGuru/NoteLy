import { Request, Response, NextFunction } from "express";
import client from "../utils/prismaClient.ts";
import handleErrors from "../utils/handleErrors.ts";

export default async function verifyUniqueEmail(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { email } = req.body;
  const { id } = res.locals.validUserData;

  try {
    const invalidEmail = await client.users.findFirst({
      where: {
        emailAddress: email,
        NOT: { id },
      },
    });
    if (invalidEmail) {
      res
        .status(400)
        .json({
          message: "Email already exists: Choose a unique and valid email",
        });
      return;
    } else {
      res.locals.uniqueEmail = email;
      next();
    }
  } catch (err) {
    handleErrors(err, "Update email later", req, res);
  }
}
