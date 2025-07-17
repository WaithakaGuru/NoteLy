import { Request, Response } from "express";

export default function (error: any, errorMessage: string, _req: Request, res: Response, ) {
    console.log(error);
    res.status(500).json({message: `Something went wrong!! ${errorMessage}`})
}