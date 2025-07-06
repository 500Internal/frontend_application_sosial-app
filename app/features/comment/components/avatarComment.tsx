import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "shared/shadcn/avatar";
import type { CommentType } from "shared/types/commentType";

type Props = {
    comment: CommentType;
};

export default function AvatarComment({ comment }: Props) {
  return (
    <Avatar className="w-10 h-10">
      <AvatarImage src={comment.user.profile.avatarImage || ""} />
      <AvatarFallback>{comment.user.profile.name}</AvatarFallback>
    </Avatar>
  );
}
