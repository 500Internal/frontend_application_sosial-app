import React from "react";
import { useParams } from "react-router";
import { AspectRatio } from "shared/shadcn/aspect-ratio";
import { useGetProfile } from "../hooks/useGetProfile";

export default function BannerProfile() {
    const {profileId} = useParams();
    const {data: profile} = useGetProfile()
  return (
    <section className="w-full relative">
      <AspectRatio ratio={16/ 7} className="bg-muted rounded-sm">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          loading="lazy"
          className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </AspectRatio>
    </section>
  );
}
