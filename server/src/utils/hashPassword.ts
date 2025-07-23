import b from "bcrypt";

export default function hashPassword(password: string) {
  const salt = b.genSaltSync(16);
  return b.hashSync(password, salt);
}
