import { Send } from "lucide-react";
import React from "react";
import { Textarea } from "shared/shadcn/textarea";
import { useCreateReplyComment } from "../hooks/useCreateReplyComment";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  commentId: string;
  postId: string;
  receiverId: string
};

export default function ReplyCommentForm({
  setIsOpen,
  commentId,
  postId,
  receiverId
}: Props) {
  const [comment, setComment] = React.useState("");
  const { addReplyComment, isPendingReplyComment } =
  useCreateReplyComment(postId);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addReplyComment({ commentId, comment, postId, receiverId });
    setIsOpen(false);
    setComment("");
  };
  return (
    <section>
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col w-full">
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="bg-white/10 border-gray-600 resize-none focus-visible:outline-none focus-visible:ring-0 text-white/90 px-4 py-2 rounded-2xl w-full rounded-tl-none max-w-sm"
          placeholder="Tulis balasan..."
        />
        {comment.trim() && (
          <div className="flex justify-end">
            <button type="submit" className="">
              <Send className="text-blue-400" />
            </button>
          </div>
        )}
      </form>
    </section>
  );
}
