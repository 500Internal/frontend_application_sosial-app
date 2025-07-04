import React from "react";
import { ImageDefaultEnum } from "shared/enums/imageDefaultEnum";
import { Avatar, AvatarFallback, AvatarImage } from "shared/shadcn/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "shared/shadcn/dropdown-menu";
import type { ProfileType } from "shared/types/profileType";
import LogoutButton from "../../auth/components/logoutButton";
import { Separator } from "shared/shadcn/separator";
import { Outlet } from "react-router";

type Props = {
  profile: ProfileType;
  label: string;
  children: React.ReactNode;
};

export default function ProfildropDown({ profile, label, children }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="w-12 h-12">
          <AvatarImage src={profile.avatarImage || ImageDefaultEnum.Default} />
          <AvatarFallback>{profile.name || "profile"}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#1d232a]  border-gray-600/65 rounded-sm shadow-lg">
        <DropdownMenuLabel className="text-white">{label}</DropdownMenuLabel>
        <DropdownMenuGroup className="flex flex-col gap-2 p-2">
          <Separator className="bg-gray-500" />
          {children}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
