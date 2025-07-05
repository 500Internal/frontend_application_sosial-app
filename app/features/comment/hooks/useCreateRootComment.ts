import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { createRootComment } from "../service/commnetService"

export const useCreateRootComment = (postId: string) => {
    const queryClient = useQueryClient()

    const {mutate: addRootComment, isPending: isPendingRootComment} = useMutation({
        mutationFn: createRootComment,
        onSuccess: () => {
            // queryClient.invalidateQueries({
            //     queryKey: ['comments', postId],
            // })
        },
        onError: () => {
            toast.error('Gagal menambahkan komentar')
        }
    })

    return {addRootComment, isPendingRootComment}
}