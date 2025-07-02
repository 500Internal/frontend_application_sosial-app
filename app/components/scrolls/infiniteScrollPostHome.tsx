import React from "react";
import PostCard from "../cards/postCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "~/services/postService";
import { PostSkeleton } from "../sekeletons/postSekeleton";

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

  if (status === 'pending') return <PostSkeleton />

  return (
    <div>
        {posts?.pages.map((page, index) => (
          <div key={index} className="flex flex-col gap-4">
            {status === 'success'&& page.posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ))}
        {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? <PostSkeleton /> : 'Load More'}
        </button>
      )}
    </div>
  )
}
