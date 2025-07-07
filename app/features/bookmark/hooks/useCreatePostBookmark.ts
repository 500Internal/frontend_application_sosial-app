import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPostBookmark } from "../service/bookmarkService";
import { toast } from "sonner";

export const useCreatePostBookmark = (postId: string) => {
    const queryClient = useQueryClient();

    const { mutate: addBookmark } = useMutation({
        mutationFn: () => createPostBookmark(postId),
        onSuccess: () => {
            // queryClient.invalidateQueries({
            //     queryKey: ["bookmark"],
            // });
            toast.success("Postingan berhasil disimpan");
        },
    });

    return { addBookmark };
};