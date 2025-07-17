import { Response, Request, NextFunction } from "express";
import client from "../utils/prismaClient.ts";

export default async function authenticateUsername(req: Request, res: Response, next: NextFunction){
    const {userName} = req.body;
    try{
        const uniqueUsername = await client.users.findFirst({
            where: {userName}
        });
        if(uniqueUsername) return res.status(400).json({message: "This Username is taken: Choose a unique username!"});
        res.locals.username = userName;
        next();
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Something went wrong! Try again later"})
    }
}