import { Request, Response } from "express";
import client from "../utils/prismaClient.ts";
import handleErrors from "../utils/handleErrors.ts";

export default async function updateNote(req: Request, res: Response) {
    const id = req.params.id;
    const {title, synopsis, content} = req.body;
    try{
        const updatedNote = await client.notes.update({
            where: {id}, 
            data: {title, synopsis, content}
        })
        if(updatedNote) res.status(201).json(updatedNote)
    }catch(err){
      handleErrors(err, "Update note later", req, res);
    }
}
