import { ThumbsUp } from "lucide-react";
import type { LikeType } from "shared/types/likeType";
import type { PostType } from "shared/types/postType";
import { useDeleteLikePost } from "../hooks/useDeleteLikePost";
import { useCreateLikePost } from "../hooks/useCreateLikePost";
import { useSession } from "~/features/auth/hooks/useSession";

type Props = {
  post: PostType;
  like: LikeType[];
};

export default function LikePostButton({ post, like }: Props) {
  //session
  const { data } = useSession();
  const isLiked = like.some((l) => l.userId === data?.data.id);
  const { addLike } = useCreateLikePost(post.id);
  const { removeLike } = useDeleteLikePost(post.id);
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
