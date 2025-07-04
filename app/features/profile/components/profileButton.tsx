import React from "react";
import { NavLink } from "react-router";
import { ImageDefaultEnum } from "shared/enums/imageDefaultEnum";
import { Avatar, AvatarFallback, AvatarImage } from "shared/shadcn/avatar";
import type { ProfileType } from "shared/types/profileType";

type Props = {
  profile: ProfileType;
};

export default function ProfileButton({ profile }: Props) {
  return (
    <NavLink
      to={`/profile/${profile.id}`}
      className="flex items-center gap-2 text-white"
    >
      <Avatar className="w-12 h-12">
        <AvatarImage src={profile.avatarImage || ImageDefaultEnum.Default} />
        <AvatarFallback>{profile.name || "profile"}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-center">
        <span className="text-sm text-white/60">{profile.user.email}</span>
        <span className="text-md font-medium text-white">{profile.name}</span>
      </div>
    </NavLink>
  );
}
