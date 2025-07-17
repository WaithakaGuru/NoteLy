import client from "../utils/prismaClient.ts";
import { Response, Request, NextFunction } from "express";

export default async function authenticateEmail(req: Request, res: Response, next: NextFunction){
   const {emailAddress} = req.body;

   try{
        const uniqueEmail = await client.users.findFirst({
            where:{emailAddress}
        })
        if(uniqueEmail) return res.status(400).json({message: "Email already exists! Choose a unique Email"});
        res.locals.email = emailAddress;
        next();
   }catch(err){
        console.log(err);
        res.status(500).json("Something went wrong! Try again later");
   }
}