import { Request, Response, NextFunction } from "express";
import client from "../utils/prismaClient.ts";
import isCorrectPassword from "../utils/verifyPassword.ts";

export default async function updatePassword(req: Request, res: Response, next: NextFunction){
    const {currentPassword, newPassword} = req.body;
    const {id} = res.locals.validUserData;
    try{
        const data = await client.users.findFirst({
            where: id, select:{password: true}
        })
        if(!isCorrectPassword(currentPassword, data?.password!)) return res.status(400).json({message: "Wrong current password"})
        else{
            res.locals.newPassword = newPassword;
            next();
        } 
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Something went wrong!! failed to verify currentPassword"})
    }
}