import React from "react";
import { useGetBookmark } from "~/features/bookmark/hooks/useGetBookmark";
import ListPostCard from "~/features/post/components/listPostCard";

export default function BookmarkPage() {
  const { data: bookmark } = useGetBookmark();
  return (
    <div className="flex gap-4 px-4 mt-2 justify-center">
      <div className="flex flex-col gap-14 w-5/6 md:w-4/6">
        {bookmark?.data.map((bookmark) => (
          <ListPostCard post={bookmark.post} />
        ))}
      </div>
    </div>
  );
}
