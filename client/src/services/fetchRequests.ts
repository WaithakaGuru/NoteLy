import { useMutation } from "@tanstack/react-query";
import useNote from "../store/notelyStore"
import ax from "../utils/axInstance";

const useGetAllNotes = () => {
    const {token} = useNote();
    return useMutation({
        mutationKey: ["GetAllBlogs"],
        mutationFn: async () => {
            const allNotes = await ax.get("/notes/all",{
                headers: {Authorization: `Author ${token}`}
            } )
            return allNotes;
        },
        retry: 1
    })
}

const useGetAllUserNotes = () => {
    const {token} = useNote();
    return useMutation({
        mutationKey: ["GetAllUserNotes"],
        mutationFn: async () => {
            const allUserNotes = await ax.get("/notes", {
                headers: {Authorization: `Author ${token}`}
            })
            return allUserNotes
        },
        retry: 1
    })
}