import { Request, Response } from "express";

export default function logoutUser(_req: Request, res: Response){
    res.locals.validUserData = null;
    res.status(200).json("");
}