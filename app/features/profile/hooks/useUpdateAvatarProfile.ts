import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAvatarProfile } from "../service/profileService";

export const useUpdateAvatarProfile = (paramsId: string) => {
    const queryClient = useQueryClient();
    const { mutate: updateAvatar } = useMutation({
        mutationFn: updateAvatarProfile,
        mutationKey: ["updateAvatar"],
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["profile", paramsId],
            });
        },
    })

    return { updateAvatar }
};