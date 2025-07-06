import React from "react";
import { Textarea } from "shared/shadcn/textarea";
import ReplyCommentForm from "./replyCommentForm";

type Props = {
    commentId: string;
    postId:string
};

export default function ReplyButton({ commentId,postId }: Props) {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="flex justify-end">
        <button onClick={() => setIsOpen(!isOpen)} className="text-sm items-end text-end text-white/60">
          {isOpen ? "Batal" : "Balas"}
        </button>
      </div>
      {isOpen && 
      <ReplyCommentForm setIsOpen={setIsOpen}  postId={postId} commentId={commentId} />
      }
    </>
  );
}
