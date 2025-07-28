import client from "../utils/prismaClient.ts";
import handleErrors from "../utils/handleErrors.ts";
export default async function updateNote(req, res) {
    const id = req.params.id;
    const { title, synopsis, content, isPublic } = req.body;
    try {
        const updatedNote = await client.notes.update({
            where: { id },
            data: { title, synopsis, content, isPublic },
        });
        if (updatedNote)
            res.status(201).json(updatedNote);
    }
    catch (err) {
        handleErrors(err, "Update note later", req, res);
    }
}
