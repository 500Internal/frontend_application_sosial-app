import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePostLike } from "../service/postService";

export const useDeleteLikePost = (postId: string) => {
  const queryClient = useQueryClient();
  const { mutate: removeLike } = useMutation({
    mutationFn: () => deletePostLike(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["like", postId],
      });
    },
  });

  return { removeLike };
};
