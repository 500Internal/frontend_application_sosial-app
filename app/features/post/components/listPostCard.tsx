import React from "react";
import { Card, CardContent } from "shared/shadcn/card";
import type { PostType } from "shared/types/postType";
import { Separator } from "shared/shadcn/separator";
import { Command, ListCollapse, MessageCircle, ThumbsUp } from "lucide-react";
import PostContent from "~/features/post/components/postContent";
import LikePostButton from "./likePostButton";
import HeaderCardPost from "~/features/post/components/headerCardPost";
import { useGetLikePostByPostId } from "../hooks/useGetLikePostByPostId";
import DialogComment from "~/features/comment/components/dialogComment";
import { useGetCommentCount } from "~/features/comment/hooks/useGetCommentCount";
import DropdownElippsisPostCard from "./dropdownElippsisPostCard";

export type Props = {
  post: PostType;
};

export default function ListPostCard({ post }: Props) {
  const { data } = useGetLikePostByPostId(post.id);
  const [isOpen, setIsOpen] = React.useState(false);
  const { data: CommentCount } = useGetCommentCount(post.id);

  return (
    <>
      <DialogComment post={post} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Card className="bg-[#1d232a] mt-4  rounded-md border-0  shadow-lg">
        <CardContent className="p-0 flex flex-col gap-1">
          <div className="flex justify-between">
            <HeaderCardPost post={post} />
            <DropdownElippsisPostCard />
          </div>
          {post && <PostContent post={post} />}
          <div className="my-3">
            <div className="flex justify-between px-4">
              <span className="text-sm text-white/60">
                {data?.data.length || 0} likes
              </span>
              <span className="text-sm text-white/60">
                {CommentCount?.data || 0} comments
              </span>
            </div>
            <Separator className="bg-gray-500" />
          </div>
          <div className="flex justify-between px-4">
            <LikePostButton post={post} like={data?.data || []} />
            <MessageCircle className="text-white/60" onClick={() => setIsOpen(true)} />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
