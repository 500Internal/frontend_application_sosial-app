import React from "react";
import { useParams } from "react-router";
import { AspectRatio } from "shared/shadcn/aspect-ratio";
import { useGetProfile } from "../hooks/useGetProfile";
import { useGetProfileByParams } from "../hooks/useGetProfileByParams";
import BannerSkeleton from "shared/ui/skeletons/bannerSkeleton";
import UpdateAvatarProfileForm from "./updateAvatarProfileForm";
import AvatarBannerProfille from "./avatarBannerProfille";

export default function BannerProfile() {
  const { profileId } = useParams();
  const { data: profile } = useGetProfile();
  const { data: profileByParams } = useGetProfileByParams(profileId!);
  //sekeleton
  if (!profile || !profileByParams) return <BannerSkeleton />;
  return (
    <section className="w-full relative">
      <AspectRatio ratio={16 / 7} className="bg-muted rounded-sm">
        <img
          src={profileByParams!.data.bannerImage}
          alt="Photo by Drew Beamer"
          loading="lazy"
          className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </AspectRatio>
      {profile!.data.userId === profileByParams!.data.userId &&
      profileByParams!.data ? (
          <UpdateAvatarProfileForm profileByParams={profileByParams!.data} />
        ) : (
          <AvatarBannerProfille profileByParams={profileByParams!.data} />
      )}
    </section>
  );
}
