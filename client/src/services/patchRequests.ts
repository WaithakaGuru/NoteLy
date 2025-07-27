import { useMutation } from "@tanstack/react-query";
import useNote from "../store/notelyStore"
import ax from "../utils/axInstance";

type UpdateNote = {
    title: string,
    synopsis: string,
    content: string, 
    isPublic: boolean
}

type UpdatePassword = {
    currentPassword: string,
    newPassword: string
}

type UpdateProfileInfo = {
    firstName: string,
    lastName: string,
    userName: string,
    emailAddress: string
}

type UpdateTypes = UpdateNote | UpdatePassword | UpdateProfileInfo | {};

const useGeneric = (id: string, mutationKey: string, path: string) => {
    const {token} = useNote();
    return useMutation({
        mutationKey: [mutationKey, id],
        mutationFn: async (data: UpdateTypes ) => {
            const genericData = await ax.patch(`${path}${id}`, data, {
                headers: {Authorization: `Author ${token}`}
            })
            return genericData.data
        }
    })
}

export default useGeneric;
