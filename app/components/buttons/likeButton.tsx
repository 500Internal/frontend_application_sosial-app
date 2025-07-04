import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ThumbsUp } from "lucide-react";
import React from "react";
import type { LikeType } from "~/common/types/likeType";
import type { PostType } from "~/common/types/postType";
import { getSession } from "~/services/authService";
import { createLike, deleteLike } from "~/services/likeService";

type Props = {
  post: PostType;
  like: LikeType[];
};

export default function LikeButton({ post, like }: Props) {
  const queryClient = useQueryClient();

  //session
  const { data, isError } = useQuery({
    queryKey: ["session"],
    queryFn: getSession,
  });
  
  const isLiked = like.some((l) => l.userId === data?.data.id);

  const { mutate: addLike } = useMutation({
    mutationFn: () => createLike(post.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["like", post.id],
      });
    },
  });

  const { mutate: removeLike } = useMutation({
    mutationFn: () => deleteLike(post.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["like", post.id],
      });
    },
  });

  const handleLike = () => {
    if (isLiked) {
      removeLike();
    } else {
      addLike();
    }
  };
  return (
    <button onClick={handleLike}>
      <ThumbsUp
        className={
          isLiked ? "fill-blue-500 text-blue-500" : "w-6 h-6 text-blue-500"
        }
      />
    </button>
  );
}
