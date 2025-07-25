import { Request, Response } from "express";

export default function getUserInfo(_req: Request, res: Response){
    const userInfo = res.locals.validUserData;
    if(userInfo)
    res.status(200).json(userInfo)
    else res.status(400).json({message: "Current userInfo not retrieved!!"})
}