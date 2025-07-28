import client from "../utils/prismaClient.ts";
import handleErrors from "../utils/handleErrors.ts";
export default async function deleteNote(req, res) {
    const id = req.params.id;
    try {
        const deletedNote = await client.notes.update({
            where: { id },
            data: { isDeleted: true },
        });
        if (deletedNote)
            res.status(201).json(deletedNote);
    }
    catch (err) {
        handleErrors(err, "Delete Note later", req, res);
    }
}
