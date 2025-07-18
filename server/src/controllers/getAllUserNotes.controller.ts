import { Request, Response } from "express";
import client from "../utils/prismaClient.ts";
import handleErrors from "../utils/handleErrors.ts";

export default async function getUserNotes(req: Request, res: Response) {
    const {id} = res.locals.validUserData;
    try{
        const allUserNotes = await client.notes.findMany({
            where: {
                OR: [{creator: id},{isPublic:true}]
            }
        })
        if(allUserNotes) res.status(200).json(allUserNotes);
    }catch(err){
       handleErrors(err, "Failed to fetch Notes", req, res);
    }
}