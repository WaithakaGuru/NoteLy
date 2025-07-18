import { Request, Response, NextFunction } from "express";
import isCorrectPassword from "../utils/verifyPassword.ts";

export default async function verifyLoginPassword(req: Request, res: Response, next: NextFunction){
    const {password: enteredPassword} = req.body
    try{
        const {password, ...otherInfo} = res.locals.validUser;
        if(isCorrectPassword(enteredPassword, password)){
            res.locals.userTokenDetails = otherInfo;
            next();
        }
        else{
         res.status(400).json({message: "Wrong Log in Credentials"})
         return
        }
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Something went wrong!! Log in later"})
    }
}