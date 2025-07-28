import client from "../utils/prismaClient.ts";
import handleErrors from "../utils/handleErrors.ts";
export default async function pinNote(req, res) {
    const id = req.params.id;
    const { isPinned } = req.body;
    try {
        const pinnedNote = await client.notes.update({
            where: {
                id: id,
            },
            data: { isPinned: !isPinned },
        });
        if (pinnedNote)
            res.status(201).json(pinnedNote);
    }
    catch (err) {
        handleErrors(err, "Pin Note Later", req, res);
    }
}
