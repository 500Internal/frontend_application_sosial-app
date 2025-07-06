import React from "react";
import { ImageDefaultEnum } from "shared/enums/imageDefaultEnum";
import { Avatar, AvatarFallback, AvatarImage } from "shared/shadcn/avatar";
import type { ProfileType } from "shared/types/profileType";
type Props = {
    profileByParams: ProfileType;
    profilePreview: string | undefined;
};
export default function AvatarBannerProfille({ profileByParams, profilePreview }: Props) {
  return (
    <div className="">
      <Avatar className="absolute bottom-0 left-20 w-20 h-20 lg:h-40 lg:w-40 -translate-x-11/12 lg:-translate-x-1/2 translate-y-1/4 rounded-full border-4 border-white dark:border-gray-800">
        <AvatarImage
          src={profilePreview ? profilePreview : profileByParams?.avatarImage || ImageDefaultEnum.Default}
        />
        <AvatarFallback>{profileByParams?.name || "profile"}</AvatarFallback>
      </Avatar>
    </div>
  );
}
