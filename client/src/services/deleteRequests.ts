import { useMutation } from "@tanstack/react-query";
import useNote from "../store/notelyStore"
import ax from "../utils/axInstance";

const useDeleteNote = (id: string)=> {
    const {token} = useNote();
    return useMutation({
        mutationKey: ["DeleteNote", id],
        mutationFn: async () => {
            const deletedNote = ax.delete(`/note/${id}`, {
                headers: {Authorization: `Author ${token}`}
            })
            return deletedNote
        }
    })
}
export default useDeleteNote;