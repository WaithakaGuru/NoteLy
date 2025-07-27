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

export default useGeneric;
