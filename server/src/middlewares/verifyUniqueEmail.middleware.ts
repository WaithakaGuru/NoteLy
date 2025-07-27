import { Request, Response, NextFunction } from "express";
import client from "../utils/prismaClient.ts";
import handleErrors from "../utils/handleErrors.ts";

export default async function verifyUniqueEmail(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { emailAddress } = req.body;
  const { id } = res.locals.validUserData;
  try {
    const invalidEmail = await client.users.findFirst({
      where: {
        emailAddress,
        NOT: { id },
      },
    });
    if (invalidEmail) {
      res
        .status(400)
        .json( {invalidEmail,
          message: "Email already exists: Choose a unique and valid email",
        });
      return;
    } else {
      res.locals.uniqueEmail = emailAddress;
      next();
    }
  } catch (err) {
    handleErrors(err, "Update email later", req, res);
  }
}
