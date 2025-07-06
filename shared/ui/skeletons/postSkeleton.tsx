import { Skeleton } from "shared/shadcn/skeleton";

export function PostSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="space-y-2 ">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      <Skeleton className="h-[125px] w-full rounded-xl" />
    </div>
  );
}
