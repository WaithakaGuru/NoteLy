import client from "../utils/prismaClient.ts";
export async function authenticateUsername(req, res, next) {
    const { userName } = req.body;
    try {
        const uniqueUsername = await client.users.findFirst({
            where: { userName },
        });
        if (uniqueUsername) {
            res
                .status(400)
                .json({ message: "This Username is taken: Choose a unique username!" });
            return;
        }
        res.locals.username = userName;
        next();
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong! Try again later" });
    }
}
