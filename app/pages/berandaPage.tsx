import { Button } from "shared/shadcn/button";
import HomeHeaderCard from "../features/post/components/createPostCard";
import InfiniteScrollPostHome from "../../shared/ui/scrolls/infiniteScrollPostHome";

export default function BerandaPage() {
  return (
    <div className="flex  gap-4 px-4 mt-2 justify-center">
      <div className="flex flex-col gap-14 w-5/6 md:w-4/6">
        <HomeHeaderCard />
        <InfiniteScrollPostHome />
      </div>
    </div>
  );
}
