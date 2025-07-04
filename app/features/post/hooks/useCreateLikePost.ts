import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPostLike } from "../service/postService";

export const useCreateLikePost = (postId: string) => {
  const queryClient = useQueryClient();
  const { mutate: addLike } = useMutation({
    mutationFn: () => createPostLike(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["like", postId],
      });
    },
  });

  return { addLike };
};
