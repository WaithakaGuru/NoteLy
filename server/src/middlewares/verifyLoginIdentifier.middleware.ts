import { Request, Response, NextFunction } from "express";
import client from "../utils/prismaClient.ts";

export default async function verifyIdentifier(req: Request, res: Response, next: NextFunction){
    const {identifier} = req.body 
    try{
        const validUser = await client.users.findFirst({
            where:{
                OR: [{emailAddress: identifier}, {userName: identifier}]
            }
        })
        if(validUser){
             res.locals.validUser = validUser;
             next();
        }
        else return res.status(400).json({message: "Wrong Log in credentials"})
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Something went wrong!! Login later"})
    }
}