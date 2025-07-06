import React from "react";
import type { CommentType } from "shared/types/commentType";
import AvatarComment from "./avatarComment";
import BubbleComment from "./bubbleComment";

type Props = {
  comments: CommentType[];
};

export default function NestedComment({ comments }: Props) {
  const [visibleReplies, setVisibleReplies] = React.useState<
    Record<string, boolean>
  >({}); // state untuk toggle reply dengan object key commentId berupa boolean

  const toggleReplyVisibility = (commentId: string) => {
    setVisibleReplies((previsibleReplies) => ({
      ...previsibleReplies, // spread operator ambil semua state sebelumnya
      [commentId]: !previsibleReplies[commentId], // ubah state tertentu dengan true/false
    }));
  };

  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment) => (
        <div key={comment.id}>
          <div className="flex items-start gap-3">
            {/* Avatar */}
            <AvatarComment comment={comment} />
            {/* Bubble */}
            <BubbleComment comment={comment} />
          </div>
          {comment.replies.length > 0 && (
            <div className="ml-14 mt-1">
              <button
                onClick={() => toggleReplyVisibility(comment.id)} // saat diklik akan toggle reply-nya yang mewakili id dari comment
                className="text-xs text-white/60 hover:underline"
              >
                {/* Ubah tulisan tombol tergantung state */}
                {visibleReplies[comment.id] ? "Sembunyikan balasan" : `Lihat ${comment.replies.length} balasan`}
              </button>
            </div>
          )}
          {/* kalo ada id dalam visibleReplies/state maka tampilkan */}
          {visibleReplies[comment.id] && (
            <div className="ml-12 mt-2 border-l border-white/20 pl-4">
              <NestedComment comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
