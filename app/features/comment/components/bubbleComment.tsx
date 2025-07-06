import React from "react";
import { timeAgo } from "shared/helpers/timeAgo";
import type { CommentType } from "shared/types/commentType";
type Props = {
  comment: CommentType;
};
export default function BubbleComment({ comment }: Props) {
  return (
    <section className="bg-white/10 text-white/90 px-4 py-2 rounded-2xl w-full rounded-tl-none max-w-sm">
      <div className="mb-1">
        <span className="font-semibold">{comment.user.profile.name}</span>
        <span className="ml-2 text-xs text-white/60">
          {timeAgo(comment.createdAt)}
        </span>
      </div>
      <p className="text-sm whitespace-pre-wrap break-words">
        {comment.comment}
      </p>
    </section>
  );
}
