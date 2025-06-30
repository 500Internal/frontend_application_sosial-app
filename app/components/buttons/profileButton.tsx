import React from "react";
import { NavLink } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/shadcn/avatar";

export default function ProfileButton() {
  return (
    <NavLink to="/profile" className="flex items-center gap-2 text-white">
      <Avatar className="w-12 h-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-center">
        <span className="text-sm text-white/70">@chadcn</span>
        <span className="text-md font-medium text-white">Chadcn</span>
      </div>
    </NavLink>
  );
}
