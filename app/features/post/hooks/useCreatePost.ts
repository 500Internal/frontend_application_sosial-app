import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createPost } from "../service/postService";

export const useCreatePost = (onSuccess: () => void) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      toast.success("Post berhasil dibuat");
      // reset
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      onSuccess();
    },
    onError: (error) => {
      toast.error("Post gagal dibuat");
    },
  });

  return { mutate, isPending };
};
