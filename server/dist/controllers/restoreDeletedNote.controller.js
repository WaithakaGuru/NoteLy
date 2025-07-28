import client from "../utils/prismaClient.ts";
import handleErrors from "../utils/handleErrors.ts";
export default async function restoreDeletedNote(req, res) {
    const id = req.params.id;
    try {
        const restoredNote = await client.notes.update({
            where: { id },
            data: { isDeleted: false },
        });
        if (restoredNote)
            res.status(201).json(restoredNote);
    }
    catch (err) {
        handleErrors(err, "Restore Note later", req, res);
    }
}
