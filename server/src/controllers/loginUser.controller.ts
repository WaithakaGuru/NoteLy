import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import handleErrors from "../utils/handleErrors";

export default function createJWebToken(req: Request, res: Response){
    const jwtKey = process.env.JWT_SECRET_KEY
    try{
        const tokenDetails = res.locals.userTokenDetails;
        const userToken = jwt.sign(tokenDetails, jwtKey!, {expiresIn: 24 * 60 * 60 * 1000});
        if(userToken) res.status(201).json(userToken);
        else res.status(400).json({message: "Failed to generate user Token"})
    }catch(err){
       handleErrors(err, "Login later", req, res)
    }
}