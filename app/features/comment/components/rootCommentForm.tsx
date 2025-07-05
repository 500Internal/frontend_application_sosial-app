import { Send } from "lucide-react";
import React from "react";
import { Button } from "shared/shadcn/button";
import { Input } from "shared/shadcn/input";

export default function RootCommentForm() {
  const [comment, setComment] = React.useState("");
  return (
    <>
      <form className="flex items-center gap-2 w-full">
        <Input value={comment} onChange={(e) => setComment(e.target.value)} placeholder="tulis komentar" className="text-white" />
        {comment.trim() && (
          <button type="submit">
            <Send className="text-white/70" />
          </button>
        )}
      </form>
    </>
  );
}
