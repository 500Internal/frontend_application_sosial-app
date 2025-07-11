import React from "react";
import { NavLink, useSearchParams } from "react-router";
import FollowNotFound from "shared/ui/notFound/followNotFound";
import InfiniteScrollPostDetail from "shared/ui/scrolls/infiniteScrollPostDetail";
import FollowerListCard from "~/features/follower/components/followerListCard";
import FollowingListCard from "~/features/follower/components/followingListCard";
import { useGetFollowingMe } from "~/features/follower/hooks/useGetFollowingMe";
import { useGetMyFollowing } from "~/features/follower/hooks/useGetMyFollowing";
import BannerProfile from "~/features/profile/components/bannerProfile";
import InfoProfileCard from "~/features/profile/components/infoProfileCard";

export default function ProfileDetailPage() {
  const [searchParams] = useSearchParams();
  const tabs = searchParams.get("tab") || "posts";
  const { data: follower } = useGetFollowingMe();
  const { data: following } = useGetMyFollowing();

  const tabList = [
    { key: "posts", label: "Postingan" },
    { key: "followers", label: "Pengikut" },
    { key: "following", label: "Mengikuti" },
  ];

  const handleRederTab = () => {
    if (tabs === "posts") {
      return <InfiniteScrollPostDetail />;
    }
    if (tabs === "followers") {
      return follower?.data.length ? (
        <FollowerListCard follower={follower?.data || []} />
      ) : (
        <FollowNotFound message="Anda belum memiliki pengikut" />
      );
    }
    if (tabs === "following") {
      return following?.data.length ? (
        <FollowingListCard following={following?.data || []} />
      ) : (
        <FollowNotFound message="Anda belum pernah mengikuti siapapun" />
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col justify-center">
      <BannerProfile />
      <div className="flex px-4 mt-32 flex-col w-full">
        <div className="flex  mb-2">
          {tabList.map((tab) => (
            <NavLink
              preventScrollReset
              key={tab.key}
              to={`?tab=${tab.key}`}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-all duration-200 ${
                tabs === tab.key
                  ? "text-blue-400"
                  : "border-transparent text-white/80 hover:text-blue-500 hover:border-b-2 hover:border-white"
              }`}
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
        <div className="flex md:flex-row flex-col w-full gap-4 items-center md:items-start  justify-center">
          <div className="lg:w-2/6 w-full">
            <InfoProfileCard />
          </div>
          <div className="flex flex-col gap-4 w-5/6 md:w-3/6">
            {handleRederTab()}
          </div>
        </div>
      </div>
    </div>
  );
}
