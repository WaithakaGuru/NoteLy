import { useMutation } from "@tanstack/react-query";
import useNote from "../store/notelyStore"
import ax from "../utils/axInstance";

const useGeneric = (id: string, mutationKey: string[], path: string) => {
    const {token} = useNote();
    return useMutation({
        mutationKey: [mutationKey, id],
        mutationFn: async (data) => {
            const genericData = await ax.patch(`${path}${id}`, data, {
                headers: {Authorization: `Author ${token}`}
            })
            return genericData.data
        }
    })
}

const useRestoreTrashNote = (id: string) => {
    const {token} = useNote();
    return useMutation({
        mutationKey: ["RestoreTrashNote", id],
        mutationFn: async () => {
            const restoredNote = await ax.patch(`/note/restore/${id}`, {}, {
                headers: {Authorization: `Author ${token}`}
            })
            return restoredNote.data
        },
        retry: 1
    })
}

const useUpdateNote = (id: string) => {
    const {token} = useNote();
    return useMutation({
        mutationKey: ["UpdateNote", id],
        mutationFn: async (data) => {
            const updatedNote = await ax.patch(`/note/${id}`, data, {
                headers: {Authorization: `Author ${token}`}
            })
            return updatedNote;
        },
        retry: 1
    })
}

export default useGeneric;
