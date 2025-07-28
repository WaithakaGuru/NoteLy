import client from "../utils/prismaClient.ts";
import handleErrors from "../utils/handleErrors.ts";
import filterOldTrashNotes from "../utils/filterOldTrash.ts";
export default async function getTrashNotes(req, res) {
    const { id } = res.locals.validUserData;
    try {
        const trashNotes = await client.notes.findMany({
            where: {
                AND: [{ creator: id }, { isDeleted: true }],
            },
            include: { NoteCreator: { omit: { password: true, avatarUrl: true } } },
        });
        if (trashNotes) {
            const validTrashNotes = filterOldTrashNotes(trashNotes);
            res.status(200).json(validTrashNotes);
        }
    }
    catch (err) {
        handleErrors(err, "Failed to fetch Trash Notes", req, res);
    }
}
