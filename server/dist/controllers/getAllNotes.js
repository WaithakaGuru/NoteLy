import client from "../utils/prismaClient.ts";
import handleErrors from "../utils/handleErrors.ts";
export default async function getAllNotes(req, res) {
    const { id } = res.locals.validUserData;
    try {
        const allUserNotes = await client.notes.findMany({
            where: {
                AND: [
                    { isDeleted: false },
                    { OR: [{ creator: id }, { isPublic: true }] },
                ],
            },
            include: { NoteCreator: { omit: { password: true, avatarUrl: true } } },
            orderBy: { lastUpdated: "desc" },
        });
        if (allUserNotes) {
            res.status(200).json(allUserNotes);
        }
    }
    catch (err) {
        handleErrors(err, "Failed to fetch Notes", req, res);
    }
}
