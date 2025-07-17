import { Request, Response } from "express";
import client from "../utils/prismaClient.ts";

export default async function createNote(req: Request, res: Response) {
    const {title, synopsis, content} = req.body;
    const {id} = res.locals.validUserData;

    try{
        const newNote = await client.notes.create({
            data: {creator: id, title, synopsis, content}
        })
        if(newNote) res.status(201).json({message: "Note created successfully", newNote})
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Something went wrong!! Create note later"})
    }
}