import React from "react";
import { timeAgo } from "shared/helpers/timeAgo";
import { Avatar, AvatarFallback, AvatarImage } from "shared/shadcn/avatar";
import type { CommentType } from "shared/types/commentType";
import AvatarComment from "./avatarComment";

type Props = {
  comments: CommentType[];
};

export default function NestedComment({ comments }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment) => (
        <div key={comment.id} className="flex items-start gap-3">
          {/* Avatar */}
          <AvatarComment comment={comment} />
          {/* Bubble */}
          <div className="bg-white/10 text-white/90 px-4 py-2 rounded-2xl w-full rounded-tl-none max-w-sm">
            <div className="mb-1">
              <span className="font-semibold">
                {comment.user.profile.name}
              </span>
              <span className="ml-2 text-xs text-white/60">
                {timeAgo(comment.createdAt)}
              </span>
            </div>
            <p className="text-sm whitespace-pre-wrap break-words">
              {comment.comment}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
