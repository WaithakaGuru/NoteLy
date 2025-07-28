import b from "bcrypt";
export default function hashPassword(password) {
    const salt = b.genSaltSync(16);
    return b.hashSync(password, salt);
}
