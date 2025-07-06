import React from "react";
import { useParams } from "react-router";
import { AspectRatio } from "shared/shadcn/aspect-ratio";
import { useGetProfile } from "../hooks/useGetProfile";
import { useGetProfileByParams } from "../hooks/useGetProfileByParams";
import { Avatar, AvatarFallback, AvatarImage } from "shared/shadcn/avatar";
import { ImageDefaultEnum } from "shared/enums/imageDefaultEnum";
import AvatarBannerProfille from "./avatarBannerProfille";
import BannerSkeleton from "shared/ui/skeletons/bannerSkeleton";

export default function BannerProfile() {
  const { profileId } = useParams();
  const { data: profile } = useGetProfile();
  const { data: profileByParams } = useGetProfileByParams(profileId!);
  //sekeleton
  if  (!profile || !profileByParams) return <BannerSkeleton />
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
      {profile!.data && profileByParams!.data ? (
        <AvatarBannerProfille profileByParams={profileByParams!.data || null} />
      ) : (
        <p>saa</p>
      )}
    </section>
  );
}
