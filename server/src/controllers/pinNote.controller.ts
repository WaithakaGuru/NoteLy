import { Request, Response } from "express";
import client from "../utils/prismaClient.ts";
import handleErrors from "../utils/handleErrors.ts";

export default async function pinNote (req: Request, res: Response) {
    const {id: userId} = res.locals.validUserData;
    const  id = req.params.id;

    try{
        const pinnedNote = await client.notes.update({
            where: {
               id: id
            }, data: {isPinned: true}
        })
        if(pinnedNote) res.status(201).json(pinnedNote);
    }catch(err) {
        handleErrors(err, "Pin Note Later", req, res,)
    }
}