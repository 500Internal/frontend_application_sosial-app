import React from "react";
import { timeAgo } from "shared/helpers/timeAgo";
import { Avatar, AvatarFallback, AvatarImage } from "shared/shadcn/avatar";
import type { CommentType } from "shared/types/commentType";
import AvatarComment from "./avatarComment";
import BubbleComment from "./bubbleComment";

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
          <BubbleComment comment={comment} />
        </div>
      ))}
    </div>
  );
}
