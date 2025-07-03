import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ThumbsUp } from "lucide-react";
import React from "react";
import type { PostType } from "~/common/types/postType";
import { getSession } from "~/services/authService";
import { createLike } from "~/services/likeService";

type Props = {
  post: PostType;
};

export default function LikeButton({ post }: Props) {
    const queryClient = useQueryClient();
  const { data, isError } = useQuery({
    queryKey: ["session"],
    queryFn: getSession,
  });
  const isLiked = post.like.find((like) => like.userId === data?.data.id);

  const { mutate: addLike } = useMutation({
    mutationFn: () => createLike(post.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["post", post.id],
      });
    },
  });

  const handleLike = () => {
    if (isLiked) {
      // remove like
    } else {
      // add like
      addLike();
    }
  };
  return (
    <button onClick={handleLike}>
      <ThumbsUp className={isLiked ? "fill-blue-500 text-blue-500" : "w-6 h-6 text-blue-500"} />
    </button>
  );
}
