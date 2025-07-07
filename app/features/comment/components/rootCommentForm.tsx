import { Send } from "lucide-react";
import React from "react";
import { Button } from "shared/shadcn/button";
import { Input } from "shared/shadcn/input";
import { useCreateRootComment } from "../hooks/useCreateRootComment";

export default function RootCommentForm({ postId,receiverId }: { postId: string, receiverId: string }) {
  const [comment, setComment] = React.useState("");
  const { addRootComment, isPendingRootComment } = useCreateRootComment(postId);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addRootComment({ comment, postId, receiverId });
    setComment("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full">
        <Input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="tulis komentar"
          className="text-white"
        />
        {comment.trim() && (
          <button type="submit">
            <Send className="text-white/70" />
          </button>
        )}
      </form>
    </>
  );
}
