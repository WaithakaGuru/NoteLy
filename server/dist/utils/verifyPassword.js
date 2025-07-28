import b from "bcrypt";
export default function isCorrectPassword(enteredPassword, storedPassword) {
    const correctPassword = b.compareSync(enteredPassword, storedPassword);
    return correctPassword;
}
