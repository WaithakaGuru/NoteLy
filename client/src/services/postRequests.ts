import { useMutation } from "@tanstack/react-query"
import useNote from "../store/notelyStore";
import ax from "../utils/axInstance";

type RegisterData = { 
    firstName: string,
    lastName: string,
    userName: string,
    emailAddress: string,
    password: string
}

const useRegister = () => {
    const {token} = useNote();
    return useMutation({
        mutationKey: ["Register"],
        mutationFn: async (data: RegisterData ) => {
            const newUser = await ax.post("/auth/register", data, {
                headers: {Authorization: `Author ${token}`}
            })
            return newUser;
        }
    })
}   

const useLogin = () => {
    const {token} = useNote();
    return useMutation(
        {
            mutationKey: ["LogIn"],
            mutationFn: async (data) => {
                const loggedUser = await ax.post("/auth/login", data, {
                    headers: {Authorization: `Author ${token}`}
                })
                return loggedUser
            }
        }
    )
}

const useCreateNote = () => {
    const {token} = useNote();
    return useMutation({
        mutationKey: ["CreateNote"],
        mutationFn: async (data) => {
            const newNote = ax.post("/notes", data, {
                headers: {Authorization: `Author ${token}`}
            })
            return newNote;
        }
    })
}
export {useRegister, useLogin, useCreateNote}