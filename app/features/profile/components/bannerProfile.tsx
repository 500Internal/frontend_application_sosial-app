import React from "react";
import { useParams } from "react-router";
import { AspectRatio } from "shared/shadcn/aspect-ratio";
import { useGetProfile } from "../hooks/useGetProfile";
import { useGetProfileByParams } from "../hooks/useGetProfileByParams";

export default function BannerProfile() {
    const {profileId} = useParams();
    const {data: profile} = useGetProfile()
    const {data: profileById} = useGetProfileByParams(profileId || "")
  return (
    <section className="w-full relative">
      <AspectRatio ratio={16/ 7} className="bg-muted rounded-sm">
        <img
          src={profileById?.data.avatarImage}
          alt="Photo by Drew Beamer"
          loading="lazy"
          className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </AspectRatio>
      <div>

      </div>
    </section>
  );
}
