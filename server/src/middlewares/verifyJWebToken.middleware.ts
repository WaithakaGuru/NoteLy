import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default function verifyJWebToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const jwtKey = process.env.JWT_SECRET_KEY;
  try {
    const tokenString = req.headers.authorization;
    if (!tokenString) {
      res.status(400).json({ message: "Missing Token" });
      return;
    }

    if (!tokenString.startsWith("Author")) {
      res.status(400).json({ message: "Wrong token!!" });
      return;
    }
    const token = tokenString.split(" ")[1];
    const tokenData = jwt.verify(token, jwtKey!);
    res.locals.validUserData = tokenData;
    next();
  } catch (err) {
    // if (err instanceof JsonWebTokenError) {
    //   console.log("Wrong token: ", err.message);
    //   res.status(400).json({ message: "Wrong token!!" });
    // } else if (err instanceof TokenExpiredError) {
    //   console.log("Expired token", err.message);
    //   res.status(400).json({ message: "Expired token" });
    // } else {
      console.log(err);
      res
        .status(500)
        .json({ message: "Server Error: Token Verfication failed!!" });
    }
  }
