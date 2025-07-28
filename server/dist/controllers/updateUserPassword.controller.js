import client from "../utils/prismaClient.ts";
import hashPassword from "../utils/hashPassword.ts";
export default async function updatePassword(_req, res) {
    const newPassword = res.locals.newPassword;
    const { id } = res.locals.validUserData;
    const hashedNewPassword = hashPassword(newPassword);
    try {
        const data = await client.users.update({
            where: id,
            data: { password: hashedNewPassword },
        });
        if (data)
            res.status(201).json({ message: "Password updated successfully" });
        else
            res.status(400).json({ message: "Password update failed!" });
    }
    catch (err) {
        console.log(err);
        res
            .status(500)
            .json({ message: "Something went wrong!! update password later" });
    }
}
