import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePostBookmark } from "../service/bookmarkService";
import { toast } from "sonner";

export const useDeletePostBookmark = (bookmarkId: string,postId: string) => {
    const queryClient = useQueryClient();
    const { mutate: deleteBookmark } = useMutation({
        mutationFn: () => deletePostBookmark(bookmarkId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["bookmark", postId],
            });
            toast.success("Postingan berhasil dari daftar tersimpan");
        },
    });
    return { deleteBookmark }
}