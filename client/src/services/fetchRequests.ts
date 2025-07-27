import { useQuery } from "@tanstack/react-query";
import useNote from "../store/notelyStore"
import ax from "../utils/axInstance";

const useGetAllNotes = () => {
    const {token} = useNote();
    return useQuery({
        queryKey: ["GetAllBlogs"],
        queryFn: async () => {
            const allNotes = await ax.get("/notes/all",{
                headers: {Authorization: `Author ${token}`}
            } )
            return allNotes.data;
        },
        retry: 1
    })
}

const useGetAllUserNotes = () => {
    const {token} = useNote();
    return useQuery({
        queryKey: ["GetAllUserNotes"],
        queryFn: async () => {
            const allUserNotes = await ax.get("/notes", {
                headers: {Authorization: `Author ${token}`}
            })
            return allUserNotes.data
        },
        retry: 1
    })
}

const useGetTrashNotes = () => {
    const {token} = useNote();
    return useQuery({
        queryKey: ["GetTrashNotes"],
        queryFn: async () => {
            const trashNotes = ax.get("/notes/trash", {
                headers: {Authorization: `Author ${token}`}
            })
            return trashNotes
        },
        retry: 1
    })
}

const useGetSpecificNote = (id: string) => {
    const {token} = useNote();
    return useQuery({
        queryKey: ["GetSpecificNote", id],
        queryFn: async () => {
            const specificNote = await ax.get(`/note/${id}`, {
                headers: {Authorization: `Author ${token}`}
            })
            return specificNote.data
        },
        retry: 1
    })
}

const useGetUserDetails = () => {
    const {token} = useNote();
    return useQuery({
        queryKey: ["GetUserDetails"],
        queryFn: async () => {
            const userInfo = await ax.get("/user", {
                headers: {Authorization: `Author ${token}`}
            })
            return userInfo.data
        }
    })
}
export {useGetAllNotes, useGetAllUserNotes, useGetSpecificNote, useGetTrashNotes, useGetUserDetails}