import client from "../utils/prismaClient.ts";
export default async function getSpecificNote(req, res) {
    const id = req.params.id;
    try {
        const specificNote = await client.notes.findFirst({
            where: { id },
            include: { NoteCreator: true },
        });
        if (specificNote) {
            res.status(200).json(specificNote);
        }
    }
    catch (err) {
        console.log(err);
        res
            .status(500)
            .json({ message: "Something went wrong!! Failed to fetch Note" });
    }
}
