import z from "zxcvbn";

export default function isStrongPassword(password: string) {
   const score =  z(password).score;
   return score >=3 ? true : false;
}