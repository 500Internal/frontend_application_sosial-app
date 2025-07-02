import { Button } from "~/common/shadcn/button";
import HomeHeaderCard from "../cards/homeHeaderCard";
import PostCard from "../cards/postCard";
import InfiniteScrollPostHome from "../scrolls/infiniteScrollPostHome";

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
