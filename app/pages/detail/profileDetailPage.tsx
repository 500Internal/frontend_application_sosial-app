import React from "react";
import { useParams } from "react-router";
import InfiniteScrollPostDetail from "shared/ui/scrolls/infiniteScrollPostDetail";
import BannerProfile from "~/features/profile/components/bannerProfile";
import InfoProfileCard from "~/features/profile/components/infoProfileCard";

export default function ProfileDetailPage() {
  return (
    <div className="flex flex-col justify-center ">
      <BannerProfile />
      <div className="flex md:flex-row flex-col w-full gap-4 items-center md:items-start px-4 mt-32 justify-center ">
        <div className="w-2/6 ">
        <InfoProfileCard />
        </div>
        <div className="flex flex-col gap-4 w-5/6 md:w-3/6">
          <InfiniteScrollPostDetail />
        </div>
      </div>
    </div>
  );
}
