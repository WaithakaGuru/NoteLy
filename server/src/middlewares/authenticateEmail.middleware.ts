import client from "../utils/prismaClient";
import { Response, Request, NextFunction } from "express";

const authenticateEmail = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { emailAddress } = req.body;

  try {
    const uniqueEmail = await client.users.findFirst({
      where: { emailAddress },
    });
    if (uniqueEmail) {
      res
        .status(400)
        .json({ message: "Email already exists! Choose a unique Email" });
      return;
    }
    res.locals.email = emailAddress;
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json("Something went wrong! Try again later");
  }
};

export default authenticateEmail;
