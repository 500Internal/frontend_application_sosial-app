import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "~/features/post/service/postService";
import { PostSkeleton } from "../skeletons/postSkeleton";
import LoadButton from "../../../app/features/post/components/loadButton";
import ListPostCard from "~/features/post/components/listPostCard";

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
            page.posts.map((post) => (
              <ListPostCard key={post.id} post={post} />
            ))}
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
