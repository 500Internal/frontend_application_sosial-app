import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createReplyComment } from "../service/commnetService"
import { toast } from "sonner"

export const useCreateReplyComment = (postId: string) => {
    const queryClient = useQueryClient()

    const {mutate: addReplyComment, isPending: isPendingReplyComment} = useMutation({
        mutationFn: createReplyComment,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['commentNested', postId],
            })
        },
        onError: () => {
            toast.error('Gagal menambahkan komentar')
        }
    })

    return {addReplyComment,isPendingReplyComment}
}