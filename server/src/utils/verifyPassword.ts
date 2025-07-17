import b from 'bcrypt';

export default function isCorrectPassword(enteredPassword: string, storedPassword: string){
    const correctPassword = b.compareSync(enteredPassword, storedPassword);
    return correctPassword 
}