import React from "react";
import { Button } from "shared/shadcn/button";
import { PostSkeleton } from "../../../../shared/ui/skeletons/postSkeleton";
import { RefreshCcw } from "lucide-react";

type Props = {
  isFetching: boolean;
  fetchNextPage: () => void;
};

export default function LoadButton({ isFetching, fetchNextPage }: Props) {
  return (
    <Button
      disabled={isFetching}
      className="w-fit bg-blue-500 "
      onClick={fetchNextPage}
    >
      {isFetching ? <PostSkeleton /> : <RefreshCcw className=" h-4 w-4" />}
    </Button>
  );
}
