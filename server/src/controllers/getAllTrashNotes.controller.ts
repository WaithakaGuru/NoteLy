import { Request, Response } from "express";
import client from "../utils/prismaClient.ts";
import handleErrors from "../utils/handleErrors.ts";

export default async function getTrashNotes(req: Request, res: Response){
    const {id} = res.locals.validUserData;
    try{
        const trashNotes = await client.notes.findMany({
            where: {
                AND: [{creator: id}, {isDeleted: false}]
            }
        })
        if(trashNotes) res.status(200).json(trashNotes);
    }catch(err){
        handleErrors(err, "Failed to fetch Trash Notes", req, res);
    }
}