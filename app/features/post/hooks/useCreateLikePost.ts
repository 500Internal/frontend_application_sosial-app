import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPostLike } from "../service/postService";

export const useCreateLikePost = (postId: string, receiverId: string) => {
  const queryClient = useQueryClient();
  const { mutate: addLike } = useMutation({
    mutationFn: () => createPostLike(postId, receiverId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["like", postId],
      });
    },
  });

  return { addLike };
};
