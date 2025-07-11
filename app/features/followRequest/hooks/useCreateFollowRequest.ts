import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createFollowRequest } from "../service/followRequestService"
import { toast } from "sonner"

export const useCreateFollowRequest = () => {
    const queryClient = useQueryClient();
    const {mutate: addFollowRequest} = useMutation({
        mutationFn: createFollowRequest,
        onSuccess: () => {
            toast.success("Permintaan follow berhasil dikirim");
            // reset
            queryClient.invalidateQueries({
                queryKey: ["userNotFollower"],
            });
        },
        onError: () => {
            toast.error("Gagal mengirim permintaan follow")
        }
    })

    return {addFollowRequest}
}