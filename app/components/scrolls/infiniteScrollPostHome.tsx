import React from "react";
import PostCard from "../cards/listPostCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "~/services/postService";
import { PostSkeleton } from "../skeletons/postSekeleton";
import LoadButton from "../buttons/loadButton";

export default function InfiniteScrollPostHome() {
  //inifiniteQuery
  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.meta.currentPage;
      const lastPageNumber = lastPage.meta.lastPage;
      return currentPage < lastPageNumber ? currentPage + 1 : undefined;
    },
  });

  if (status === "pending") return <PostSkeleton />;

  return (
    <div className="flex flex-col gap-4">
      {posts?.pages.map((page, index) => (
        <div key={index} className="flex flex-col gap-4">
          {status === "success" &&
            page.posts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      ))}
      {hasNextPage && (
        <div className="flex justify-center">
          <LoadButton
            isFetching={isFetchingNextPage}
            fetchNextPage={fetchNextPage}
          />
        </div>
      )}
    </div>
  );
}
